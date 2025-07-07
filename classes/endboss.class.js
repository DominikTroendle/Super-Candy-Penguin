// import { MovableObject } from "./movable-object.class.js";
import { Enemy } from "./enemy.class.js";

// export class Endboss extends MovableObject {
export class Endboss extends Enemy {
    x = 3840 + 1280 - 320;
    y = 270;
    width = 300;
    height = 300;
    
    IMAGES_BOSS = [
        'img/enemys/Boss/Idle/skeleton-Idle_0.png',
        'img/enemys/Boss/Idle/skeleton-Idle_1.png',
        'img/enemys/Boss/Idle/skeleton-Idle_2.png',
        'img/enemys/Boss/Idle/skeleton-Idle_3.png',
        'img/enemys/Boss/Idle/skeleton-Idle_4.png',
        'img/enemys/Boss/Idle/skeleton-Idle_5.png',
        'img/enemys/Boss/Idle/skeleton-Idle_6.png',
        'img/enemys/Boss/Idle/skeleton-Idle_7.png',
        'img/enemys/Boss/Idle/skeleton-Idle_8.png',
        'img/enemys/Boss/Idle/skeleton-Idle_9.png',
        'img/enemys/Boss/Idle/skeleton-Idle_10.png',
        'img/enemys/Boss/Idle/skeleton-Idle_11.png',
        'img/enemys/Boss/Idle/skeleton-Idle_12.png',
        'img/enemys/Boss/Idle/skeleton-Idle_13.png',
        'img/enemys/Boss/Idle/skeleton-Idle_14.png',
        'img/enemys/Boss/Idle/skeleton-Idle_15.png',
        'img/enemys/Boss/Idle/skeleton-Idle_16.png',
        'img/enemys/Boss/Idle/skeleton-Idle_17.png',
    ];

    constructor() {
        super().loadImage('img/enemys/Boss/Idle/skeleton-Idle_0.png');
        this.loadImages(this.IMAGES_BOSS);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation('idle', this.IMAGES_BOSS);
        }, 1000 / 18);
    }
}