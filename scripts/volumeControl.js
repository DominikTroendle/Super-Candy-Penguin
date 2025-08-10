let soundControls = Array.from(document.querySelectorAll('.sound-control'));
let musicVolume = 0.5;
let soundVolume = 0.5;
let musicMuted = false;
let soundMuted = false;
let volumeMap = {
    "sound-down": () => clickSound.volume = soundVolume = Math.max(0, soundVolume - 0.1),
    "sound-up": () => clickSound.volume = soundVolume = Math.min(0.5, soundVolume + 0.1),
    "sound-mute": () => {
        soundMuted = !soundMuted;
        clickSound.volume = soundMuted ? 0 : soundVolume
    },
    "music-down": () => musicVolume = Math.max(0, musicVolume - 0.1),
    "music-up": () => musicVolume = Math.min(0.5, musicVolume + 0.1),
    "music-mute": () => musicMuted = !musicMuted
};
let clickSound = new Audio('./audio/sounds/click.mp3');
let winMusic = new Audio('./audio/music/win-music.mp3')
let gameOverMusic = new Audio('./audio/music/game-over-music.mp3');

soundControls.forEach(e => e.addEventListener('click', () => {
    clickSound.play();
    changeVolume(e.id);
}));

function changeVolume(id) {
    if (volumeMap[id]) {
        volumeMap[id]();
        soundVolume = Math.round(soundVolume * 10) / 10;
        musicVolume = Math.round(musicVolume * 10) / 10;
        setLocalStorage();
        changeVolumeDisplay(id);
    };
}

window.addEventListener('DOMContentLoaded', () => {
    getLocalStorage();
    changeVolumeDisplay('sound-volume');
    changeVolumeDisplay('music-volume');
    if (soundMuted) {
        changeVolumeDisplay('sound-mute');
        clickSound.volume = 0;
    };
    if (musicMuted) changeVolumeDisplay('music-mute');
});

function changeVolumeDisplay(id) {
    let percent;
    let [type, action] = id.split("-");
    if (type === "sound") {
        percent = (soundVolume*100)*2;
    } else {
        percent = (musicVolume*100)*2;
    };
    if (action === "mute") {
        document.getElementById(`${type}-volume`).disabled = (type === "sound" ? soundMuted : musicMuted);
        document.getElementById(`${type}-down`).disabled = (type === "sound" ? soundMuted : musicMuted);
        document.getElementById(`${type}-up`).disabled = (type === "sound" ? soundMuted : musicMuted);
        document.getElementById('sound-mute').style.backgroundImage = soundMuted ? `url('./img/menu-screens/buttons/sound-off.png')` : `url('./img/menu-screens/buttons/sound-on.png')`;
        document.getElementById('music-mute').style.backgroundImage = musicMuted ? `url('./img/menu-screens/buttons/music-off.png')` : `url('./img/menu-screens/buttons/music-on.png')`;
    } else {
        document.getElementById(`${type}-volume`).style.backgroundImage = `url('./img/menu-screens/buttons/soundbar-${percent}.png')`;
    };
}

function setLocalStorage() {
    localStorage.setItem('soundVolume', soundVolume);
    localStorage.setItem('soundMuted', soundMuted);
    localStorage.setItem('musicVolume', musicVolume);
    localStorage.setItem('musicMuted', musicMuted);
}

function getLocalStorage() {
    let storedSoundVolume = localStorage.getItem('soundVolume');
    let storedMusicVolume = localStorage.getItem('musicVolume');
    clickSound.volume = soundVolume = storedSoundVolume !== null ? parseFloat(storedSoundVolume) : 0.5;
    musicVolume = storedMusicVolume !== null ? parseFloat(storedMusicVolume) : 0.5;
    soundMuted = localStorage.getItem('soundMuted') === "true";
    musicMuted = localStorage.getItem('musicMuted') === "true";
}

function playWinLoseMusic(status) {
    winMusic.volume = musicMuted ? 0 : musicVolume;
    gameOverMusic.volume = musicMuted ? 0 : musicVolume;
    status == "win-screen" ? winMusic.play() : gameOverMusic.play();
}

function stopAllMusic() {
    winMusic.pause();
    winMusic.currentTime = 0;
    gameOverMusic.pause();
    gameOverMusic.currentTime = 0;
}