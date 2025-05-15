// app.js

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

function initGallery() {
    renderVideos();
    setupEventListeners();
    setupMediaSession();
    detectVisibilityChanges();
}

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

function playVideo(video) {
    mainVideo.src = `videos/${video.filename}`;
    videoTitle.textContent = video.title;
    videoPlayer.style.display = 'block';

    mainVideo.setAttribute('playsinline', '');
    mainVideo.setAttribute('webkit-playsinline', '');
    mainVideo.setAttribute('x-webkit-airplay', 'allow');
    mainVideo.setAttribute('preload', 'auto');

    if (/Android/i.test(navigator.userAgent)) {
        mainVideo.requestFullscreen().catch(console.log);
    }

    const playPromise = mainVideo.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            mainVideo.controls = true;
            showPlayOverlay();
        });
    }

    updateMediaSession(video);
    isPlayingInBackground = false;
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

function detectVisibilityChanges() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (!mainVideo.paused) {
                isPlayingInBackground = true;
            }
        } else {
            if (isPlayingInBackground) {
                mainVideo.play().catch(console.log);
            }
        }
    });
}

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

function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderVideos();
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            currentCategory = tab.dataset.category;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderVideos();
        });
    });

    backBtn.addEventListener('click', closePlayer);
}

// Initialize on load
window.onload = initGallery;
