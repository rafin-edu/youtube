// Video data
const videos = 
{
        id: 1,
        title: "Surah Baqara Part-1", 
        filename: "video1.mp4", 
        thumbnail: "thumb1.jpg",
        duration: "15:00",
        category: "surah"
    },
    { 
        id: 2,
        title: "Surah Muluk", 
        filename: "video2.mp4", 
        thumbnail: "thumb2.jpg",
        duration: "8:10",
        category: "surah"
    },
    { 
        id: 3,
        title: "Surah Baqara Part-2", 
        filename: "video3.mp4", 
        thumbnail: "thumb3.jpg",
        duration: "14:36",
        category: "surah"
    },
    { 
        id: 4,
        title: "Surah Baqara Part-3 ", 
        filename: "video4.mp4", 
        thumbnail: "thumb4.jpg",
        duration: "4:10",
        category: "surah"
    },
    { 
        id: 5,
        title: "Sunset Beach", 
        filename: "video5.mp4", 
        thumbnail: "thumb5.jpg",
        duration: "3:45",
        category: "nature"
    },
       { 
        id: 6,
        title: "Surah Baqara Part-1", 
        filename: "video6.mp4", 
        thumbnail: "thumb6.jpg",
        duration: "2:45",
        category: "nature"
    },
    { 
        id: 7,
        title: "Surah Muluk", 
        filename: "video7.mp4", 
        thumbnail: "thumb7.jpg",
        duration: "3:20",
        category: "nature"
    },
    { 
        id: 8,
        title: "Mountain View", 
        filename: "video8.mp4", 
        thumbnail: "thumb8.jpg",
        duration: "2:15",
        category: "nature"
    },
    { 
        id: 9,
        title: "Forest Walk", 
        filename: "video9.mp4", 
        thumbnail: "thumb9.jpg",
        duration: "4:10",
        category: "nature"
    },
    { 
        id: 10,
        title: "জৈব রসায়ন Part-1", 
        filename: "video10.mp4", 
        thumbnail: "thumb10.jpg",
        duration: "19:18",
        category: "chemistry"
    },
    
    
    { 
        id: 11,
        title:"Organic Chemistry Part-2",
        filename: "video11.mp4", 
        thumbnail: "thumb11.jpg",
        duration: "5:20",
        category: "nature"
    },
    { 
        id: 12,
        title: "Baking Tutorial", 
        filename: "video12.mp4", 
        thumbnail: "thumb12.jpg",
        duration: "7:15",
        category: "food"
    },
    { 
        
        id: 13,
        title: "Rainy Day", 
        filename: "video13.mp4", 
        thumbnail: "thumb13.jpg",
        duration: "2:30",
        category: "urban"
    },
    { 
        id: 14,
        title: "Wildlife Documentary", 
        filename: "video14.mp4", 
        thumbnail: "thumb14.jpg",
        duration: "8:45",
        category: "nature"
    },
    { 
        id: 15,
        title: "Morning Routine", 
        filename: "video15.mp4", 
        thumbnail: "thumb15.jpg",
        duration: "6:10",
        category: "lifestyle"
    },
    { 
        id: 16,
        title: "Abstract Art", 
        filename: "video16.mp4", 
        thumbnail: "thumb16.jpg",
        duration: "3:55",
        category: "art"
    },
    { 
        id: 17,
        title: "Tropical Island", 
        filename: "video17.mp4", 
        thumbnail: "thumb17.jpg",
        duration: "4:25",
        category: "nature"
    },
    { 
        id: 18,
        title: "Cooking Pasta", 
        filename: "video18.mp4", 
        thumbnail: "thumb18.jpg",
        duration: "5:40",
        category: "food"
    },
    { 
        id: 19,
        title: "Northern Lights", 
        filename: "video19.mp4", 
        thumbnail: "thumb19.jpg",
        duration: "4:50",
        category: "nature"
    },
    { 
        id: 20,
        title: "Yoga Session", 
        filename: "video20.mp4", 
        thumbnail: "thumb20.jpg",
        duration: "10:15",
        category: "fitness"
    },
    { 
        id: 21,
        title: "Mountain Hike", 
        filename: "video21.mp4", 
        thumbnail: "thumb21.jpg",
        duration: "5:22",
        category: "nature"
    },
    { 
        id: 22,
        title: "Ocean Waves", 
        filename: "video22.mp4", 
        thumbnail: "thumb22.jpg",
        duration: "2:15",
        category: "nature"
    },
    { 
        id: 23,
        title: "City Time-lapse", 
        filename: "video23.mp4", 
        thumbnail: "thumb23.jpg",
        duration: "1:45",
        category: "urban"
    },
    { 
        id: 24,
        title: "Desert Sunset", 
        filename: "video24.mp4", 
        thumbnail: "thumb24.jpg",
        duration: "3:30",
        category: "nature"
    },
    { 
        id: 25,
        title: "Coffee Making", 
        filename: "video25.mp4", 
        thumbnail: "thumb25.jpg",
        duration: "4:12",
        category: "food"
    },
    { 
        id: 26,
        title: "Snowfall", 
        filename: "video26.mp4", 
        thumbnail: "thumb26.jpg",
        duration: "2:50",
        category: "nature"
    },
    { 
        id: 27,
        title: "Street Performance", 
        filename: "video27.mp4", 
        thumbnail: "thumb27.jpg",
        duration: "6:18",
        category: "urban"
    },
    { 
        id: 28,
        title: "Waterfall", 
        filename: "video28.mp4", 
        thumbnail: "thumb28.jpg",
        duration: "3:05",
        category: "nature"
    },
    { 
        id: 29,
        title: "Forest Walk", 
        filename: "video29.mp4", 
        thumbnail: "thumb29.jpg",
        duration: "4:10",
        category: "nature"
    },
    { 
        id: 30,
        title: "Sunset Beach", 
        filename: "video30.mp4", 
        thumbnail: "thumb30.jpg",
        duration: "3:45",
        category: "nature"
    },

];
    // ... (other video objects)

// DOM Elements
const videoGrid = document.getElementById('video-grid');
const searchInput = document.getElementById('search-input');
const tabs = document.querySelectorAll('.tab');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const videoPlayer = document.getElementById('video-player');
const mainVideo = document.getElementById('main-video');
const videoTitle = document.getElementById('video-title');
const backBtn = document.getElementById('back-btn');

// State
let currentCategory = 'all';
let currentSearch = '';
let isPlayingInBackground = false;

// Initialize gallery
function initGallery() {
    renderVideos();
    setupEventListeners();
    setupMediaSession();
    detectVisibilityChanges();
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

// Play video with background support
function playVideo(video) {
    mainVideo.src = `videos/${video.filename}`;
    videoTitle.textContent = video.title;
    videoPlayer.style.display = 'block';
    
    // Enable background playback attributes
    mainVideo.setAttribute('playsinline', '');
    mainVideo.setAttribute('webkit-playsinline', '');
    mainVideo.setAttribute('x-webkit-airplay', 'allow');
    
    // For iOS - prevent automatic fullscreen
    mainVideo.setAttribute('preload', 'auto');
    
    // Auto fullscreen on Android
    if (/Android/i.test(navigator.userAgent)) {
        mainVideo.requestFullscreen().catch(console.log);
    }
    
    const playPromise = mainVideo.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(e => {
            mainVideo.controls = true;
            showPlayOverlay();
        });
    }
    
    updateMediaSession(video);
    isPlayingInBackground = false;
}

// Background playback controls
function setupMediaSession() {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', () => {
            mainVideo.play();
            isPlayingInBackground = false;
        });
        
        navigator.mediaSession.setActionHandler('pause', () => {
            mainVideo.pause();
            isPlayingInBackground = true;
        });
        
        navigator.mediaSession.setActionHandler('stop', () => {
            mainVideo.pause();
            mainVideo.currentTime = 0;
            isPlayingInBackground = false;
        });
    }
}

function updateMediaSession(video) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: video.title,
            artist: 'My Video Gallery',
            artwork: [
                { src: `thumbnails/${video.thumbnail}`, sizes: '96x96', type: 'image/jpeg' }
            ]
        });
    }
}

// Detect when app goes to background
function detectVisibilityChanges() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // App is in background
            if (!mainVideo.paused) {
                isPlayingInBackground = true;
            }
        } else {
            // App is in foreground
            if (isPlayingInBackground) {
                mainVideo.play().catch(console.log);
            }
        }
    });
}

// Show play overlay for iOS
function showPlayOverlay() {
    const playOverlay = document.createElement('div');
    playOverlay.className = 'play-overlay';
    playOverlay.innerHTML = '<i class="fas fa-play"></i>';
    playOverlay.onclick = () => {
        mainVideo.play();
        playOverlay.remove();
    };
    document.querySelector('.player-container').appendChild(playOverlay);
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
    
    if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'none';
    }
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
    
    // Back button
    backBtn.addEventListener('click', closePlayer);
    
    // Handle video ending
    mainVideo.addEventListener('ended', () => {
        if (isPlayingInBackground) {
            // Auto-play next video if in background
            playNextVideo();
        }
    });
}

function playNextVideo() {
    const currentIndex = videos.findIndex(v => `videos/${v.filename}` === mainVideo.src);
    if (currentIndex !== -1 && currentIndex < videos.length - 1) {
        playVideo(videos[currentIndex + 1]);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initGallery);

// Add play overlay styles dynamically
const style = document.createElement('style');
style.textContent = `
.play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    cursor: pointer;
}
.play-overlay i {
    font-size: 50px;
    color: white;
}
`;
document.head.appendChild(style);