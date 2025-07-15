import { DrawableObject } from "./drawable-object.class.js";

export class BossHealthbar extends DrawableObject {
    x = 300;
    y = 20;
    width = 700;
    height = 79;
    IMAGES = [
        'img/boss-healtbar/boss-healtbar0.png',
        'img/boss-healtbar/boss-healtbar10.png',
        'img/boss-healtbar/boss-healtbar20.png',
        'img/boss-healtbar/boss-healtbar30.png',
        'img/boss-healtbar/boss-healtbar40.png',
        'img/boss-healtbar/boss-healtbar50.png',
        'img/boss-healtbar/boss-healtbar60.png',
        'img/boss-healtbar/boss-healtbar70.png',
        'img/boss-healtbar/boss-healtbar80.png',
        'img/boss-healtbar/boss-healtbar90.png',
        'img/boss-healtbar/boss-healtbar100.png',
    ];
    
    constructor() {
        super().loadImage('img/boss-healtbar/boss-healtbar100.png');
        this.loadImages(this.IMAGES);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let index = percentage / 10;
        let path = this.IMAGES[index];
        this.img = this.imageCache[path];
    }
}