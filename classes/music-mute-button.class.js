import { Settings } from "./settings.class.js";

export class MusicMuteButton extends Settings {
    y = 285;
    world;

    constructor() {
        super();
        this.loadImage(musicMuted ? 'img/menu-screens/buttons/music-off.png' : 'img/menu-screens/buttons/music-on.png');
    }

    /**
     * Handles the click event on the music button by toggling the global 'musicMuted' flag,
     * updating the buttons image and adjusting the background music's volume based on the mute state.
     * Saves the mute state to the local storage.
     */
    onClick() {
        musicMuted = !musicMuted;
        if (musicMuted) {
            this.loadImage('./img/menu-screens/buttons/music-off.png');
            this.world.backgroundMusic.bgMusic.volume = 0;
            this.world.backgroundMusic.bossMusic.volume = 0;
        } else {
            this.loadImage('./img/menu-screens/buttons/music-on.png');
            this.world.backgroundMusic.bgMusic.volume = musicVolume;
            this.world.backgroundMusic.bossMusic.volume = musicVolume;
        }
        setLocalStorage();
    }
}