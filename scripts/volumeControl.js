const soundControls = Array.from(document.querySelectorAll('.sound-control'));
const mobileSoundControls = Array.from(document.querySelectorAll('.mobile-control-button-sm'));
let musicVolume = 0.5;
let soundVolume = 0.5;
let musicMuted = false;
let soundMuted = false;
const volumeMap = {
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
const clickSound = new Audio('./audio/sounds/click.mp3');
const winMusic = new Audio('./audio/music/win-music.mp3')
const gameOverMusic = new Audio('./audio/music/game-over-music.mp3');

/**
 * Handles clicking any sound control button: plays a click sound and changes volume based on the clicked button's ID.
 */
soundControls.forEach(e => e.addEventListener('click', () => {
    clickSound.play();
    changeVolume(e.id);
}));

/**
 * Changes the volume or mute state based on the given sound control button ID.
 *
 * @param {String} id - the ID of the clicked sound control button
 */
function changeVolume(id) {
    if (volumeMap[id]) {
        volumeMap[id]();
        soundVolume = Math.round(soundVolume * 10) / 10;
        musicVolume = Math.round(musicVolume * 10) / 10;
        setLocalStorage();
        changeVolumeDisplay(id);
    };
}

/**
 * Restores volume and mute settings from localStorage and updates the UI once the DOM is fully loaded.
 */
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

/**
 * Updates the visual volume bar or mute button for  the sound control button with the given ID.
 *
 * @param {String} id - the sound control buttons ID
 */
function changeVolumeDisplay(id) {
    let percent;
    const [type, action] = id.split("-");
    if (type === "sound") {
        percent = (soundVolume * 100) * 2;
    } else {
        percent = (musicVolume * 100) * 2;
    };
    if (action === "mute") {
        updateMuteButtons(type);
    } else {
        document.getElementById(`${type}-volume`).style.backgroundImage = `url('./img/menu-screens/buttons/soundbar-${percent}.png')`;
    };
}

/**
 * Updates the mute buttons and disables/enables corresponding controls depending on the mute state of sound or music.
 *
 * @param {String} type - the buttons type ("sound" or "music")
 */
function updateMuteButtons(type) {
    document.getElementById(`${type}-volume`).disabled = (type === "sound" ? soundMuted : musicMuted);
    document.getElementById(`${type}-down`).disabled = (type === "sound" ? soundMuted : musicMuted);
    document.getElementById(`${type}-up`).disabled = (type === "sound" ? soundMuted : musicMuted);
    document.getElementById('sound-mute').style.backgroundImage = soundMuted ? `url('./img/menu-screens/buttons/sound-off.png')` : `url('./img/menu-screens/buttons/sound-on.png')`;
    document.getElementById('sound-mute-mobile').style.backgroundImage = soundMuted ? `url('./img/menu-screens/buttons/sound-off.png')` : `url('./img/menu-screens/buttons/sound-on.png')`;
    document.getElementById('music-mute').style.backgroundImage = musicMuted ? `url('./img/menu-screens/buttons/music-off.png')` : `url('./img/menu-screens/buttons/music-on.png')`;
    document.getElementById('music-mute-mobile').style.backgroundImage = musicMuted ? `url('./img/menu-screens/buttons/music-off.png')` : `url('./img/menu-screens/buttons/music-on.png')`;
}

/**
 * Saves the current sound and music volume/mute settings to localStorage.
 */
function setLocalStorage() {
    localStorage.setItem('soundVolume', soundVolume);
    localStorage.setItem('soundMuted', soundMuted);
    localStorage.setItem('musicVolume', musicVolume);
    localStorage.setItem('musicMuted', musicMuted);
}

/**
 * Loads sound and music volume/mute settings from localStorage. If no settings are stored, default values are used.
 */
function getLocalStorage() {
    const storedSoundVolume = localStorage.getItem('soundVolume');
    const storedMusicVolume = localStorage.getItem('musicVolume');
    clickSound.volume = soundVolume = storedSoundVolume !== null ? parseFloat(storedSoundVolume) : 0.5;
    musicVolume = storedMusicVolume !== null ? parseFloat(storedMusicVolume) : 0.5;
    soundMuted = localStorage.getItem('soundMuted') === "true";
    musicMuted = localStorage.getItem('musicMuted') === "true";
}

/**
 * Plays either the win or game over music depending on the given game's status.
 *
 * @param {String} status - the game's status
 */
function playWinLoseMusic(status) {
    winMusic.volume = musicMuted ? 0 : musicVolume;
    gameOverMusic.volume = musicMuted ? 0 : musicVolume;
    status == "win-screen" ? winMusic.play() : gameOverMusic.play();
}

/**
 * Stops all background music (win and game over) and resets playback time to the beginning.
 */
function stopAllMusic() {
    winMusic.pause();
    winMusic.currentTime = 0;
    gameOverMusic.pause();
    gameOverMusic.currentTime = 0;
}

/**
 * Registers touch event listeners for all mobile sound control buttons
 * and toggles the corresponding mute via 'handleMobileSoundControls()'.
 */
mobileSoundControls.forEach(e => e.addEventListener('touchstart', () => {
    if (e.id === "sound-mute-mobile") {
        handleMobileSoundControls("sound");
    } else if (e.id === "music-mute-mobile") {
        handleMobileSoundControls("music");
    };
}));

/**
 * Handles mute/unmute actions for mobile sound controls with the given type by.
 * toggling the corresponding mute flag and updating the sounds or musics volume.
 * Saves the updated mute states to localStorage.
 *
 * @param {String} type - the control type to toggle ("sound", "music")
 */
function handleMobileSoundControls(type) {
    if (type === "sound") {
        soundMuted = !soundMuted;
        clickSound.volume = soundMuted ? 0 : soundVolume;
        updateMuteButtons("sound");
    } else if (type === "music") {
        musicMuted = !musicMuted;
        window.currentWorld.backgroundMusic.bgMusic.volume = musicMuted ? 0 : musicVolume;
        window.currentWorld.backgroundMusic.bossMusic.volume = musicMuted ? 0 : musicVolume;
        updateMuteButtons("music");
    }
    setLocalStorage();
}