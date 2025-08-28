import { ThrowableObject } from '../classes/throwable-object.class.js';

export class CandyManager {
    constructor(world) {
        this.world = world;
        this.throwableObjects = [];
    }

    checkThrowableObject() {
        if (this.world.keyboard.F && this.world.candyCounter.currentAmount > 0) {
            this.createThrowableObject();
        }
        this.filterCandys();
    }

    createThrowableObject() {
        let candy = new ThrowableObject(this.world.character, this.world.character.x + 290, this.world.character.y + 200);
        this.throwableObjects.push(candy);
        this.world.candyCounter.decreaseCount(this.world.candyCounter);
        this.world.playSound('throw');
        this.world.keyboard.F = false;
    }

    filterCandys() {
        this.throwableObjects = this.throwableObjects.filter(candy => {
            if (candy.y > 720) return false;
            if (this.checkCandyCollision(candy)) return false;
            return true;
        });
    }

    checkCandyCollision(candy) {
        for (let enemy of this.world.level.enemies) {
            if (candy.isHittingEnemy(enemy)) {
                this.world.playSound('hit');
                this.world.level.removeEnemy(enemy);
                return true;
            };
        };
        if (this.world.character.isBossfight && candy.isHittingBoss(this.world.endboss)) {
            this.world.playSound('hit');
            this.world.endboss.isDamaged();
            return true;
        };
        return false;
    }
}
