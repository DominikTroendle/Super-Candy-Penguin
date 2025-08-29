import { DrawableObject } from "../classes/drawable-object.class.js";

export class Statusbar extends DrawableObject {
    x = 40;
    y = 20;
    width = 300;
    height = 79;
    IMAGES = [
        'img/statusbar/0.png',
        'img/statusbar/20.png',
        'img/statusbar/40.png',
        'img/statusbar/60.png',
        'img/statusbar/80.png',
        'img/statusbar/100.png',
    ];
    percentage = 100;

    constructor() {
        super();
        this.loadImage('img/statusbar/100.png');
        this.loadImages(this.IMAGES);
    }

    /**
     * Updates the class-specific percentage value with the given percentage value
     * and selects the corresponding image from the preloaded image cache.
     *
     * @param {Number} percentage - the given percentage value (0–100)
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let index = percentage / 20;
        let path = this.IMAGES[index];
        this.img = this.imageCache[path];
    }
}