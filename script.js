const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause-button");
const playPauseIcon = document.getElementById("play-pause-icon");
const volumeControl = document.getElementById("volume-control");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseIcon.src = "./docs/assets/images/play.png";
    } else {
        audio.play();
        playPauseIcon.src = "./docs/assets/images/pause.png";
    }
    isPlaying = !isPlaying;
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);

    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
});