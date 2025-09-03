import { Settings } from "./settings.class.js";

export class SoundMuteButton extends Settings {
    y = 285;
    world;

    constructor() {
        super();
        this.loadImage(soundMuted ? 'img/menu-screens/buttons/sound-off.png' : 'img/menu-screens/buttons/sound-on.png');
    }

    isClicked(mouseX, mouseY) {
        return (
            mouseX >= this.x &&
            mouseX <= this.x + this.width &&
            mouseY >= this.y &&
            mouseY <= this.y + this.height
        );
    }

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
    }
}