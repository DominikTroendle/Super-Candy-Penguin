import { Character } from "./character.class.js";
import { DrawableObject } from "./drawable-object.class.js";

export class MovableObject extends DrawableObject {
    speed;
    speedY = 0;
    acceleration = 4;
    life = 100;
    lastHit = 0;
    groundY = 570;
    characterOffset = {
        top: 150,
        left: 220,
        width: 115,
        height: 142
    };
    collisionOffset = {
        top: 170,
        left: 240,
        bottom: 10,
        width: 75,
        height: 112
    };
    bossCollisionOffset = {
        top: 20,
        left: 55,
        width: 190,
        height: 280
    };
    isBossfight = false;

    constructor() {
        super();
    }

    /**
     * Applies gravity to the object by updating its vertical position over time based on speed and acceleration.
     * Ensures the character cannot fall below the ground level.
     */
    applyGravity() {
        setStoppableInterval(() => {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            if (this instanceof Character && !this.isAboveGround()) {
                this.y = 280;
                this.speedY = 0;
            };       
        }, 1000 / 25)
    }

    /**
     * Checks whether the object is above ground level.
     *
     * @returns {Boolean} - true if the object is above ground, otherwise false
     */
    isAboveGround() {
       return this.y < 280;
    }

    /**
     * Checks whether the object is on or below ground level.
     *
     * @returns {Boolean} - true if the object is on the ground, otherwise false
     */
    isOnGround() {
        return this.y >= 280;
    }

    /**
     * Moves the object to the right if the end of the level has not been reached.
     */
    moveRight() {
        if (this.x < this.world.level.level_end_x) {
            this.x += this.speed;
        };
    }

    /**
     * Moves the object to the left.
     * If not in a boss fight, free movement is allowed, otherwise the movement is restricted to the boss arena.
     */
    moveLeft() {
        if (!this.isBossfight) {
            this.x -= this.speed;
        };
        if (this.isBossfight && this.x >= 3650) {
            this.x -= this.speed;
        };
    }

    /**
     * Moves an enemy object to the left .
     */
    enemyMoveLeft() {
        this.x -= this.speed;
    }

    /**
     * Initiates a jump by setting the vertical speed.
     */
    jump() {
        this.speedY = 33;
    }

    /**
     * Checks if this object (the character) is colliding with the given object by using a specified collision offset.
     *
     * @param {Object} object - the object to check collision against
     * @returns {Boolean} - true if the objects are colliding, otherwise false
     */
    isColliding(object) {
        return this.x + this.collisionOffset.left + this.collisionOffset.width > object.x &&
            this.y + this.collisionOffset.top + this.collisionOffset.height > object.y &&
            this.x + this.collisionOffset.left < object.x + object.width &&
            this.y + this.collisionOffset.top < object.y + object.height;
    }

    /**
     * Checks if this object (enemy) is colliding with the given character (attacking the given character)
     * by using a specified collision offset.
     *
     * @param {Character} character - the character to check against
     * @returns {Boolean} - true if the objects are colliding, otherwise false
     */
    isAttacking(character) {
        return this.x < character.x + this.collisionOffset.left + this.collisionOffset.width &&
            this.y < character.y + this.collisionOffset.top + this.collisionOffset.height &&
            this.x + this.width > character.x + this.collisionOffset.left &&
            this.y + this.height > character.y + this.collisionOffset.top;
    }

    /**
     * Checks if this object (the boss) is colliding with the given character (attacking the given character)
     * by using the boss's specified collision offset.
     *
     * @param {Character} character - the character to check against
     * @returns {Boolean} - true if the objects are colliding, otherwise false
     */
    bossIsAttacking(character) {
        return this.x + this.bossCollisionOffset.left < character.x + this.collisionOffset.left + this.collisionOffset.width &&
            this.y + this.bossCollisionOffset.top < character.y + this.collisionOffset.top + this.collisionOffset.height &&
            this.x + this.bossCollisionOffset.left + this.bossCollisionOffset.width > character.x + this.collisionOffset.left &&
            this.y + this.bossCollisionOffset.top + this.bossCollisionOffset.width > character.y + this.collisionOffset.top;
    }

    /**
     * Checks if this object (the character) jumped on top of the given object by using a specified collision offset.
     *
     * @param {Object} object - the object to check against
     * @returns {Boolean} - true if a jump-on-top collision occurred, otherwise false
     */
    isJumpedOnTop(object) {
        return this.y + this.collisionOffset.top + this.collisionOffset.height >= this.groundY - object.height &&
            this.x + this.collisionOffset.left + this.collisionOffset.width > object.x &&
            this.x + this.collisionOffset.left < object.x + object.width &&
            this.y < 280 + object.height &&
            this.speedY < 0;
    }

    /**
     * Applies damage to this object (the character), updates its life value and plays a sound if the life reaches zero.
     */
    hit() {
        this.life -= 20;
        if (this.life < 0) {
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        };
        if (this.life == 0) this.world.playSound('character_dead');
    }

    /**
     * Returns the time in ms since the object (the character) was last hit.
     *
     * @returns {Number} - the time elapsed since the last hit
     */
    timeSinceLastHit() {
        return new Date().getTime() - this.lastHit;
    }

    /**
     * Checks whether this object (the character) can currently be hit again.
     *
     * @returns {Boolean} - true if enough time has passed since the last hit, otherwise false
     */
    canBeHit() {
        return this.timeSinceLastHit() > 550;
    }

    /**
     * Determines whether this object (the character) is in a hurt state (shortly after being hit).
     *
     * @returns {Boolean} - true if the object is still in the hurt animation window, otherwise false
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    /**
     * Checks whether this object (the character) is dead.
     *
     * @returns {Boolean} - true if life has reached 0, otherwise false
     */
    isDead() {
        return this.life == 0;
    }
}