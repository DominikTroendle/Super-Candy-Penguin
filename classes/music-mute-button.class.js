import { Settings } from "./settings.class.js";

export class MusicMuteButton extends Settings {
    y = 285;
    world;

    constructor() {
        super();
        this.loadImage(musicMuted ? 'img/menu-screens/buttons/music-off.png' : 'img/menu-screens/buttons/music-on.png');
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
    }
}