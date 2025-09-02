import { Settings } from "./settings.class.js";

export class SoundMuteButton extends Settings {
    y = 285;

    constructor() {
        super().loadImage('img/menu-screens/buttons/sound-on.png');
    }
}