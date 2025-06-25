import { Background } from "./background.class.js";

export class BackgroundObject extends Background {

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}