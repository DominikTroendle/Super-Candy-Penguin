import { Settings } from "./settings.class.js";

export class MusicMuteButton extends Settings {
    y = 210;

    constructor() {
        super().loadImage('img/menu-screens/buttons/music-on.png');
    }
}