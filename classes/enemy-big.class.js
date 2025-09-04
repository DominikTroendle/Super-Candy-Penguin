import { ENEMY_BIG_IMAGES } from "../scripts/enemy-images.js";
import { Enemy } from "./enemy.class.js";

export class EnemyBig extends Enemy {
    y = 490;
    width = 131;
    height = 80;
    IMAGES_WALKING = ENEMY_BIG_IMAGES.walking;
    IMAGES_ATTACKING = ENEMY_BIG_IMAGES.attacking;
    speed = 0.2;

    constructor(startX) {
        super().loadImage('img/enemys/Monster1/Walk/skeleton-Walk_0.png');
        this.x = startX + Math.random() * 500;
        this.speed = this.speed + Math.random() * 0.7;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACKING);
    }

    /**
     * Starts the enemy's main animation and movement loops.
     */
    animate() {
        setStoppableInterval(() => {
            this.enemyMoveLeft();
        }, 1000 / 30);
        setStoppableInterval(() => {
            this.animateBigEnemy();
        }, 1000 / 60);
    }

    /**
     * Plays an animation for the enemy based on their current state (attacking, walking).)
     */
    animateBigEnemy() {
        if (this.isAttacking(this.character) && !this.character.isDead()) {
            this.playAnimation('attacking', this.IMAGES_ATTACKING, 44);
        } else {
            this.playAnimation('walking', this.IMAGES_WALKING, 18);
        };
    }
}