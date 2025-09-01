import { ENDBOSS_IMAGES } from "../scripts/endboss-images.js";
import { Enemy } from "./enemy.class.js";
import { Snowball } from "./snowball.class.js";

export class Endboss extends Enemy {
    x = 3840 + 1280 - 320;
    y = 275;
    width = 300;
    height = 300;
    health = 100;
    snowballs = [];
    otherDirection = false;
    speed = 1;
    targetLocation;
    lastLocation = 4800;
    IMAGES_IDLE = ENDBOSS_IMAGES.idle;
    IMAGES_WALKING = ENDBOSS_IMAGES.walking;
    IMAGES_ATTACKING = ENDBOSS_IMAGES.attacking;
    IMAGES_DEATH = ENDBOSS_IMAGES.death;

    constructor() {
        super().loadImage('img/enemys/Boss/Idle/skeleton-Idle_0.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_DEATH);
        this.generateTargetLocation();
        this.animate();
    }

    /**
     * Starts the endboss's main animation.
     */
    animate() {
        setStoppableInterval(() => {
            this.animateEndboss();
        }, 1000 / 60);
    }

    /**
     * Plays an animation for the endboss based on their current state
     * (dead, attacking, walking, idle).
     */
    animateEndboss() {
        if (this.health <= 0) {
            this.executeWonGameEnding();
        } else if (this.bossIsAttacking(this.character) && !this.character.isDead()) {
            this.faceCharacter();
            this.playAnimation('attacking', this.IMAGES_ATTACKING, 55);
        } else if (this.world.character.isBossfight && !this.character.isDead()) {
            this.playAnimation('walking', this.IMAGES_WALKING, 18);
            this.moveRandom();
        } else {
            this.playAnimation('idle', this.IMAGES_IDLE, 18);
        };
    }

    /**
     * Executes the ending sequence when the player has won the game.
     * Plays the endboss's death animation, ends the game with a win and
     * pauses the background music.
     */
    executeWonGameEnding() {
        this.playAnimation('dead', this.IMAGES_DEATH, 10);
        endGame('W', this.world.coinCounter.currentAmount);
        setTimeout(() => this.world.backgroundMusic.bossMusic.pause(), 1200);
    }

    /**
     * Reduces the endboss's health when damaged.
     * Plays the death sound when health reaches 0 and updates the boss health bar.
     */
    isDamaged() {
        this.health -= 10;
        if (this.health <= 0) {
            this.health = 0;
            this.world.playSound('boss_dead');
        };
        this.world.boss_healthbar.setPercentage(this.health);
    }

    /**
     * Moves the endboss toward a random target location.
     * When reaching a target location, generates a new target,
     * triggers a throwing attack, and plays the throw sound.
     */
    moveRandom() {
        if (this.x === this.targetLocation) {
            this.generateTargetLocation();
            this.throwingAttack();
            this.world.playSound('boss_throw');
        };
        if (this.targetLocation === this.lastLocation || this.x === this.targetLocation) return;
        this.otherDirection = this.x < this.targetLocation;
        this.x += (this.otherDirection ? 1 : -1) * this.speed;
    }

    /**
     * Generates a random x-coordinate within the boss movement range and sets it as the new target location.
     */
    generateTargetLocation() {
        this.targetLocation = Math.floor(Math.random() * (4800 - 4200 + 1)) + 4200;
    }

    /**
     * Updates the boss's facing direction based on the character's position.
     */
    faceCharacter() {
        this.otherDirection = this.character.x + this.characterOffset.left > this.x + this.bossCollisionOffset.left;
    }

    /**
     * Creates a new snowball and adds it to the snowballs array.
     */
    throwingAttack() {
        let snowball = new Snowball(this.x, this.y);
        this.snowballs.push(snowball);
    }

    /**
     * Filters the snowballs array to remove those that are either off-screen or have collided with the character.
     */
    checkSnowballs() {
        this.snowballs = this.snowballs.filter(snowball => {
            if (snowball.y > 720) {
                return false;
            } else if (this.checkSnowballCollision(snowball)) {
                return false;
            };
            return true;
        });
    }

    /**
     * Checks for collisions between snowballs and the character.
     * If a collision is detected, plays hit sounds, applies damage and updates the character's health bar.
     *
     * @returns {Boolean} - true if a collision occurred, false otherwise
     */
    checkSnowballCollision() {
        for (let i = 0; i < this.snowballs.length; i++) {
            if (this.world.character.isColliding(this.snowballs[i])) {
                this.world.playSound('hit_snowball');
                this.world.playSound('hurt');
                this.world.character.hit();
                this.world.statusbar.setPercentage(this.world.character.life);
                return true;
            };
        };
    }
}