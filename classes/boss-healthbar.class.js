import { DrawableObject } from "./drawable-object.class.js";

export class BossHealthbar extends DrawableObject {
    x = 550;
    y = 20;
    width = 700;
    height = 79;
    IMAGES = [
        'img/boss-healthbar/boss-healthbar0.png',
        'img/boss-healthbar/boss-healthbar10.png',
        'img/boss-healthbar/boss-healthbar20.png',
        'img/boss-healthbar/boss-healthbar30.png',
        'img/boss-healthbar/boss-healthbar40.png',
        'img/boss-healthbar/boss-healthbar50.png',
        'img/boss-healthbar/boss-healthbar60.png',
        'img/boss-healthbar/boss-healthbar70.png',
        'img/boss-healthbar/boss-healthbar80.png',
        'img/boss-healthbar/boss-healthbar90.png',
        'img/boss-healthbar/boss-healthbar100.png',
    ];
    
    constructor() {
        super().loadImage('img/boss-healthbar/boss-healthbar100.png');
        this.loadImages(this.IMAGES);
    }

    /**
     * Draws the boss name on the given 2d canvas rendering context with styles such as
     * font, fillStyle and shadow.
     * @param {CanvasRenderingContext2D} ctx - the 2D rendering context of the canvas
     */
    drawBossName(ctx) {
        ctx.font = '48px Modak';
        ctx.fillStyle = 'white';
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.fillText('Zyklops', 810, 125);
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }

    /**
     * Updates the objects image based on the given percentage.
     * @param {Number} percentage - the percentage value used to determine which image to display
     */
    setPercentage(percentage) {
        const index = percentage / 10;
        const path = this.IMAGES[index];
        this.img = this.imageCache[path];
    }
}