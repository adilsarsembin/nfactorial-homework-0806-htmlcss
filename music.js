const audio = document.getElementsByTagName('audio');
const video = document.getElementsByTagName('video');

let currentSong = 0;

function playPause() {
    let currentAudio = audio[currentSong];
    let currentVideo = video[currentSong];
    if (currentAudio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}  
function playSong() {
    let currentAudio = audio[currentSong];
    let currentVideo = video[currentSong];
    if (currentAudio.paused) {
        currentAudio.play();
        currentVideo.play();
    }
}
function pauseSong() {
    let currentAudio = audio[currentSong];
    let currentVideo = video[currentSong];
    if (!currentAudio.paused) {
        currentAudio.pause();
        currentVideo.play();
    }
}

function nextSong() {
    pauseSong();
    if ((currentSong + 1) >= audio.length) {
        currentSong = 0;
    } else {
        currentSong += 1;
    }
    playPause();
}
function previousSong() {
    pauseSong();
    if ((currentSong - 1) < 0) {
        currentSong = 0;
    } else {
        currentSong -= 1;
    }
    playPause();
}