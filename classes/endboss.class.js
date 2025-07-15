import { Enemy } from "./enemy.class.js";

export class Endboss extends Enemy {
    x = 3840 + 1280 - 320;
    y = 270;
    width = 300;
    height = 300;
    health = 100;
    
    IMAGES_IDLE = [
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
    IMAGES_DEATH = [
        'img/enemys/Death Sprite/skeleton-animation_0.png',
        'img/enemys/Death Sprite/skeleton-animation_1.png',
        'img/enemys/Death Sprite/skeleton-animation_2.png',
        'img/enemys/Death Sprite/skeleton-animation_3.png',
        'img/enemys/Death Sprite/skeleton-animation_4.png',
        'img/enemys/Death Sprite/skeleton-animation_5.png',
        'img/enemys/Death Sprite/skeleton-animation_6.png',
        'img/enemys/Death Sprite/skeleton-animation_7.png',
        'img/enemys/Death Sprite/skeleton-animation_8.png',
        'img/enemys/Death Sprite/skeleton-animation_9.png'
    ];

    constructor() {
        super().loadImage('img/enemys/Boss/Idle/skeleton-Idle_0.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DEATH);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.health <= 0) {
                this.playAnimation('dead', this.IMAGES_DEATH, 10)
            } else {
                this.playAnimation('idle', this.IMAGES_IDLE, 18);
            }
        }, 1000 / 60);
    }

    isDamaged() {
        this.health -= 10;
        if (this.health <= 0) this.health = 0;
        this.world.boss_healthbar.setPercentage(this.health);
    }

    drawBorder(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'red';
        ctx.rect(this.x + this.bossCollisionOffset.left, this.y + this.bossCollisionOffset.top, this.bossCollisionOffset.width, this.bossCollisionOffset.height);
        ctx.stroke();
    }
}