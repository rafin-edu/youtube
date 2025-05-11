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

// Render videos
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
    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        mainVideo.requestFullscreen().catch(e => console.log("Fullscreen error:", e));
    }
    mainVideo.play().catch(() => {
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
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderVideos();
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderVideos();
        });
    });

    darkModeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    uploadFab.addEventListener('click', () => videoUpload.click());
    videoUpload.addEventListener('change', handleVideoUpload);

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

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initGallery);