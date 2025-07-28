import { MovableObject } from "./movable-object.class.js";

export class Heart extends MovableObject {
    y = 300;
    width = 60;
    height = 60;
    IMAGES_HEART = [
        'img/collectibles/heart/Heart_1.png',
        'img/collectibles/heart/Heart_2.png',
        'img/collectibles/heart/Heart_3.png',
        'img/collectibles/heart/Heart_4.png',
        'img/collectibles/heart/Heart_5.png',
        'img/collectibles/heart/Heart_6.png',
        'img/collectibles/heart/Heart_7.png',
        'img/collectibles/heart/Heart_8.png',
        'img/collectibles/heart/Heart_9.png',
        'img/collectibles/heart/Heart_10.png',
    ];

    constructor(x) {
        super().loadImage('img/collectibles/heart/Heart_1.png');
        this.loadImages(this.IMAGES_HEART);
        this.x = x;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation('spinning', this.IMAGES_HEART, 10);
        }, 1000 / 60);
    }
}