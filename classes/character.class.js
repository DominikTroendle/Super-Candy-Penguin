import { CHARACTER_IMAGES } from "../scripts/character-images.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject {
    x = 0;
    y = 280;
    width = 547;
    height = 350;
    speed = 25;
    IMAGES_IDLE = CHARACTER_IMAGES.idle;
    IMAGES_WALKING = CHARACTER_IMAGES.walking;
    IMAGES_JUMPING = CHARACTER_IMAGES.jumping;
    IMAGES_SLAP = CHARACTER_IMAGES.slap;
    IMAGES_HURT = CHARACTER_IMAGES.hurt;
    IMAGES_DEAD = CHARACTER_IMAGES.dead;
    world;
    currentAnimation;
    lastAnimationFrameTime;
    animationFinished;
    otherDirection = false;

    constructor() {
        super().loadImage('img/characters/Character02/Idle/All Characters-Character02-Idle_00.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.applyGravity();
    }

    /**
     * Starts the character's main animation and movement loops.
     */
    animate() {
        setStoppableInterval(() => {
            this.animateCharacter();
        }, 1000 / 60);
        setStoppableInterval(() => {
            this.moveCharacter();
        }, 1000 / 30);
    }

    /**
     * Plays an animation for the character based on their current state
     * (dead, hurt, jumping, walking, idle).
     */
    animateCharacter() {
        if (this.isDead()) {
           this.executeLostGameEnding();
        } else if (this.isHurt()) {
            this.playAnimation('hurt', this.IMAGES_HURT, 48);
        } else if (this.isAboveGround()) {
            this.playAnimation('jumping', this.IMAGES_JUMPING, 25);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation('walking', this.IMAGES_WALKING, 30);
        } else {
            this.playAnimation('idle', this.IMAGES_IDLE, 20);
        };
    }

    /**
     * Executes the ending sequence when the player has lost the game.
     * Plays the character's death animation, ends the game with a loss and
     * pauses the background music.
     */
    executeLostGameEnding() {
        this.playAnimation('dead', this.IMAGES_DEAD, 45);
        endGame('L', this.world.coinCounter.currentAmount);
        setTimeout(() => {
            this.world.backgroundMusic.bgMusic.pause();
            this.world.backgroundMusic.bossMusic.pause();
        }, 1200);
    }

    /**
     * Handles character movement based on keyboard input.
     * Moves the camera, checks if the character can move sideways or jump,
     * executes the according movement and plays the jump sound when jumping.
     */
    moveCharacter() {
        this.moveCameraX();
        if (this.isDead()) return;
        if (this.world.keyboard.RIGHT) {
            this.moveRight();
            this.otherDirection = false;
        };
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
        };
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            this.world.playSound('jump');
        };
    }

    /**
     * Moves the cmaera along the x-axis to follow the character, stopping at the boss fight trigger point.
     */
    moveCameraX() {
        if (this.x < 3850 && !this.isBossfight) this.world.camera_x = -this.x;
    }

    /**
     * Checks for all types of collisions (boss, enemies, candies, coins, hearts).
     */
    checkCollisions() {
        this.checkBossCollision();
        this.checkEnemysCollision();
        this.checkItemCollisions('candys', this.world.coinCounter, 'pickup_candy');
        this.checkItemCollisions('coins', this.world.candyCounter, 'pickup_coin');
        this.checkHeartCollisions();
    }

    /**
     * Checks if the boss collides with the character while attacking,
     * applies damage, plays the hurt sound, and updates the status bar.
     */
    checkBossCollision() {
        if (this.isBossfight && this.canBeHit() && this.world.endboss.bossIsAttacking(this) && !this.isDead() && !gameEnded) {
            this.hit();
            this.world.playSound('hurt');
            this.world.statusbar.setPercentage(this.life);
        };
    }

    /**
     * Checks for enemy collisions (character being hit or character jumping on an enemy).
     */
    checkEnemysCollision() {
        this.checkEnemyisHit();
        this.checkEnemyisHitting();
    }

    /**
     * Checks if any enemy collides with the character (when not jumping on top). Applies damage and updates the characters status bar.
     */
    checkEnemyisHitting() {
        this.world.level.enemies.forEach(enemy => {
            if (this.isColliding(enemy) && this.canBeHit() && !this.isDead()) {
                this.hit();
                this.world.playSound('hurt');
                this.world.statusbar.setPercentage(this.life);
            };
        });
    }

    /**
     * Removes enemies from the level when the character jumps on them and plays the according sound.
     */
    checkEnemyisHit() {
        this.world.level.enemies = this.world.level.enemies.filter(enemy => {
            if (this.isFalling() && this.isColliding(enemy)) {
                this.world.playSound('jump_ontop');
                return false;
            };
            return true;
        });
    }

    /**
     * Handles collision with collectible items. If the character collides with an item,
     * the corresponding counter is increased, a sound effect is played, and the collected item is removed from the level.
     * 
     * @param {String} key - the name of the array inside `this.world.level` ("candys", "coins")
     * @param {Counter} counter - the counter instance that tracks the number of collected items
     * @param {String} sound -  the name of the sound to be played
     */
    checkItemCollisions(key, counter, sound) {
        this.world.level[key] = this.world.level[key].filter(item => {
            if (this.isColliding(item)) {
                counter.increaseCount(counter);
                this.world.playSound(sound);
                return false;
            };
            return true;
        });
    }

    /**
     * Handles collisions with hearts. If life is below 100, increases life, updates status bar, plays pickup sound,
     * and removes the collected heart.
     */
    checkHeartCollisions() {
        this.world.level.hearts = this.world.level.hearts.filter(heart => {
            if (this.isColliding(heart) && this.life < 100) {
                this.life += 20;
                this.world.statusbar.setPercentage(this.life);
                this.world.playSound('pickup_heart');
                return false;
            };
            return true;
        });
    }

    /**
     * Checks if the character has reached the boss fight trigger point. Activates the boss fight if true.
     */
    checkBossFight() {
        if (this.x > 3840) {
            this.isBossfight = true;
        }
    }
}