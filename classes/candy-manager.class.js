import { ThrowableObject } from './throwable-object.class.js';

export class CandyManager {
    constructor(world) {
        this.world = world;
        this.throwableObjects = [];
    }

    /**
     * Checks whether a throwable object (candy) should be created.
     * If the "F" key is pressed and candies are available, a throwable object is created.
     * Afterwards, filters out candies that are off-screen or have collided.
     */
    checkThrowableObject() {
        if (this.world.keyboard.F && this.world.candyCounter.currentAmount > 0) {
            this.createThrowableObject();
        }
        this.filterCandys();
    }

    /**
     * Creates a new throwable candy object at the characters position, adds it to teh throwableObjects array,
     * decreases the candy counter, plays the throw sound and resets the "F" key state.
     */
    createThrowableObject() {
        let candy = new ThrowableObject(this.world.character, this.world.character.x + 290, this.world.character.y + 200);
        this.throwableObjects.push(candy);
        this.world.candyCounter.decreaseCount(this.world.candyCounter);
        this.world.playSound('throw');
        this.world.keyboard.F = false;
    }

    /**
     * Filters the throwable candy objects to remove those that are either
     * off-screen or have collided with an enemy or the boss.
     */
    filterCandys() {
        this.throwableObjects = this.throwableObjects.filter(candy => {
            if (candy.y > 720) {
                return false;
            } else if (this.checkCandyCollision(candy)) {
                return false;
            };
            return true;
        });
    }

    /**
     * Checks if the given candy collides with an enemy or the boss.
     * @param {Object} candy - the candy to check for collisions
     * @returns - true if a collision occured, false otherwise
     */
    checkCandyCollision(candy) {
        if (this.handleEnemyHit(candy)) return true;
        if (this.handleBossHit(candy)) return true;
        return false;
    }

    /**
     * Handles collisions between a candy and enemies.
     * Removes the enemy and plays a hit sound if a collision is detected.
     * @param {Object} candy - the candy to check for collision with enemies
     * @returns - true if an enemy was hit, false otherwise
     */
    handleEnemyHit(candy) {
        for (let enemy of this.world.level.enemies) {
            if (candy.isHittingEnemy(enemy)) {
                this.world.playSound('hit');
                this.world.level.removeEnemy(enemy);
                return true;
            };
        };
        return false;
    }

    /**
     * Handles collisions between a candy and the boss.
     * Damages the boss and plays a hit sound if a collision is detected.
     * @param {Object} candy - the candy to check for collision with the boss
     * @returns - true if the boss was hit, false otherwise
     */
    handleBossHit(candy) {
        if (this.world.character.isBossfight && candy.isHittingBoss(this.world.endboss)) {
            this.world.playSound('hit');
            this.world.endboss.isDamaged();
            return true;
        };
        return false;
    }
}
