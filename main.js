// Video data
const videos = [
    { 
        id: 1,
        title: "Beech Day", 
        filename: "video1.mp4", 
        thumbnail: "thumb1.jpg",
        duration: "2:45",
        category: "nature"
    },
    { 
        id: 2,
        title: "Mountain Hike", 
        filename: "video2.mp4", 
        thumbnail: "thumb2.jpg",
        duration: "4:12",
        category: "nature"
    },
    { 
        id: 3,
        title: "City Tour", 
        filename: "video3.mp4", 
        thumbnail: "thumb3.jpg",
        duration: "3:30",
        category: "activities"
    },
    { 
        id: 4,
        title: "Saturday Party", 
        filename: "video4.mp4", 
        thumbnail: "thumb4.jpg",
        duration: "5:20",
        category: "events"
    },
    { 
        id: 5,
        title: "Concert Night", 
        filename: "video5.mp4", 
        thumbnail: "thumb5.jpg",
        duration: "6:15",
        category: "events"
    },
    { 
        id: 6,
        title: "Pet Adventures", 
        filename: "video6.mp4", 
        thumbnail: "thumb6.jpg",
        duration: "1:45",
        category: "activities"
    },
    { 
        id: 7,
        title: "Cooking Show", 
        filename: "video7.mp4", 
        thumbnail: "thumb7.jpg",
        duration: "8:30",
        category: "activities"
    },
    { 
        id: 8,
        title: "Workout Routine", 
        filename: "video8.mp4", 
        thumbnail: "thumb8.jpg",
        duration: "7:10",
        category: "activities"
    },
    { 
        id: 9,
        title: "Gaming Session", 
        filename: "video9.mp4", 
        thumbnail: "thumb9.jpg",
        duration: "10:45",
        category: "activities"
    }
];

// DOM Elements
const videoGrid = document.getElementById('video-grid');
const searchInput = document.getElementById('search-input');
const tabs = document.querySelectorAll('.tab');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const videoPlayer = document.getElementById('video-player');
const mainVideo = document.getElementById('main-video');
const videoTitle = document.getElementById('video-title');
const backBtn = document.querySelector('.back-btn');
const uploadFab = document.querySelector('.upload-fab');
const videoUpload = document.getElementById('video-upload');

// State
let currentCategory = 'all';
let currentSearch = '';

// Initialize gallery
function initGallery() {
    renderVideos();
    setupEventListeners();
}

// Render videos based on filters
function renderVideos() {
    videoGrid.innerHTML = '';
    
    const filteredVideos = videos.filter(video => {
        const matchesCategory = currentCategory === 'all' || video.category === currentCategory;
        const matchesSearch = video.title.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    if (filteredVideos.length === 0) {
        videoGrid.innerHTML = '<p class="no-results">No videos found</p>';
        return;
    }
    
    filteredVideos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <img src="thumbnails/${video.thumbnail}" class="video-thumbnail">
            <div class="video-overlay">
                <h3>${video.title}</h3>
                <p>${video.duration}</p>
            </div>
        `;
        
        card.addEventListener('click', () => playVideo(video));
        videoGrid.appendChild(card);
    });
}

// Play video
function playVideo(video) {
    mainVideo.src = `videos/${video.filename}`;
    videoTitle.textContent = video.title;
    videoPlayer.style.display = 'block';
    
    // Auto fullscreen on mobile
    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        mainVideo.requestFullscreen().catch(e => {
            console.log("Fullscreen error:", e);
        });
    }
    
    mainVideo.play().catch(e => {
        // If autoplay fails, show native controls
        mainVideo.controls = true;
    });
}

// Close player
function closePlayer() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    videoPlayer.style.display = 'none';
    mainVideo.pause();
    mainVideo.currentTime = 0;
    mainVideo.controls = false;
}

// Setup event listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderVideos();
    });
    
    // Category tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderVideos();
        });
    });
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
    
    // Upload functionality
    uploadFab.addEventListener('click', () => videoUpload.click());
    videoUpload.addEventListener('change', handleVideoUpload);
    
    // Fullscreen change
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            closePlayer();
        }
    });
}

// Handle video upload
function handleVideoUpload(e) {
    const files = e.target.files;
    if (files.length > 0) {
        Array.from(files).forEach((file, index) => {
            if (file.type.startsWith('video/')) {
                const videoId = videos.length + 1 + index;
                const videoName = file.name.replace(/\.[^/.]+$/, "");
                
                videos.push({
                    id: videoId,
                    title: videoName,
                    filename: file.name,
                    thumbnail: `thumb${videoId}.jpg`,
                    duration: "0:00",
                    category: "activities"
                });
            }
        });
        
        renderVideos();
        alert(`${files.length} videos added!`);
        videoUpload.value = '';
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initGallery);