import { Enemy } from "./enemy.class.js";

export class EnemySmall extends Enemy {
    y = 498;
    width = 65;
    height = 74;
    IMAGES_WALKING = [
        'img/enemys/Monster4/Walk/skeleton-Walk_0.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_1.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_2.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_3.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_4.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_5.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_6.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_7.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_8.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_9.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_10.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_11.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_12.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_13.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_14.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_15.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_16.png',
        'img/enemys/Monster4/Walk/skeleton-Walk_17.png'
    ];
    IMAGES_ATTACKING = [
        'img/enemys/Monster4/Attack/skeleton-Attack_0.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_1.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_2.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_3.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_4.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_5.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_6.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_7.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_8.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_9.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_10.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_11.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_12.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_13.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_14.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_15.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_16.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_17.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_18.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_19.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_20.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_21.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_22.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_23.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_24.png',
        'img/enemys/Monster4/Attack/skeleton-Attack_25.png'
    ];
    speed = 0.8;

    constructor(startX) {
        super().loadImage('img/enemys/Monster4/Walk/skeleton-Walk_0.png');
        this.x = startX + Math.random() * 500;
        this.speed = this.speed + Math.random() * 0.9;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACKING);
    }

    animate() {
        setStoppableInterval(() => {
            this.enemyMoveLeft();
        }, 1000 / 30);
        setStoppableInterval(() => {
            this.animateSmallEnemy()
        }, 1000 / 60);
    }

    animateSmallEnemy() {
        if (this.isAttacking(this.character) && !this.character.isDead()) {
            this.playAnimation('attacking', this.IMAGES_ATTACKING, 26);
        } else {
            this.playAnimation('walking', this.IMAGES_WALKING, 24);
        };
    }
}