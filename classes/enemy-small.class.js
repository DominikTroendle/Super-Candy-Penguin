import { ENEMY_SMALL_IMAGES } from "../scripts/enemy-images.js";
import { Enemy } from "./enemy.class.js";

export class EnemySmall extends Enemy {
    y = 498;
    width = 65;
    height = 74;
    IMAGES_WALKING = ENEMY_SMALL_IMAGES.walking;
    IMAGES_ATTACKING = ENEMY_SMALL_IMAGES.attacking;
    speed = 0.8;

    constructor(startX) {
        super().loadImage('img/enemys/Monster4/Walk/skeleton-Walk_0.png');
        this.x = startX + Math.random() * 500;
        this.speed = this.speed + Math.random() * 0.9;
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
            this.animateSmallEnemy()
        }, 1000 / 60);
    }

    /**
     * Plays an animation for the enemy based on their current state (attacking, walking).)
     */
    animateSmallEnemy() {
        if (this.isAttacking(this.character) && !this.character.isDead()) {
            this.playAnimation('attacking', this.IMAGES_ATTACKING, 26);
        } else {
            this.playAnimation('walking', this.IMAGES_WALKING, 24);
        };
    }
}