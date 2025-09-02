import { Settings } from "./settings.class.js";

export class MusicMuteButton extends Settings {
    y = 210;

    constructor() {
        super().loadImage('img/menu-screens/buttons/music-on.png');
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
        console.log('button clicked');
        
        /* volumeControl.soundMute = !volumeControl.soundMute;

        if (volumeControl.soundMute) {
            this.loadImage('./img/menu-screens/buttons/sound-off.png');
        } else {
            this.loadImage('./img/menu-screens/buttons/sound-on.png');
        } */
    }
}