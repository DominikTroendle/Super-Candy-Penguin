import { Settings } from "./settings.class.js";

export class SoundMuteButton extends Settings {
    y = 210;
    world;

    constructor() {
        super();
        this.loadImage(soundMuted ? 'img/menu-screens/buttons/sound-off.png' : 'img/menu-screens/buttons/sound-on.png');
    }

    /**
     * Handles the click event on the sound button by toggling the global 'soundMuted' flag,
     * updating the buttons image and adjusting the global sound volume based on the mute state.
     * Saves the mute state to the local storage.
     */
    onClick() {
        soundMuted = !soundMuted;
        if (soundMuted) {
            this.loadImage('./img/menu-screens/buttons/sound-off.png');
            this.world.soundVol = 0;
            this.world.soundVol = 0;
        } else {
            this.loadImage('./img/menu-screens/buttons/sound-on.png');
            this.world.soundVol = soundVolume;
            this.world.soundVol = soundVolume;
        };
        setLocalStorage();
    }
}