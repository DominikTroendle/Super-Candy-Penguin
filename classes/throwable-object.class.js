import { MovableObject } from "./movable-object.class.js";

export class ThrowableObject extends MovableObject {
    width = 60;
    height = 60;
    IMAGES_SPINNING = [
        'img/candy/animated/candy0.png',
        'img/candy/animated/candy1.png',
        'img/candy/animated/candy2.png',
        'img/candy/animated/candy3.png',
        'img/candy/animated/candy4.png',
        'img/candy/animated/candy5.png',
        'img/candy/animated/candy6.png',
        'img/candy/animated/candy7.png',
        'img/candy/animated/candy8.png',
        'img/candy/animated/candy9.png'
    ];

    constructor(character, x, y) {
        super().loadImage('img/candy/animated/candy0.png');
        this.loadImages(this.IMAGES_SPINNING);
        this.x = x;
        this.y = y;
        this.animate();
        this.throw(character);
    }

    /**
     * Starts the throwable object's spinning animation.
     */
    animate() {
        setStoppableInterval(() => {
            this.playAnimation('spinning', this.IMAGES_SPINNING, 10);
        });
    }
    
    /**
     * Throws the object in the direction the character is facing by applying an upward velocity
     * and gravity while moving it horizontally until it collides or leaves the screen.
     *
     * @param {Character} character - the character that throws the object
     */
    throw(character) {
        this.speedY = 33;
        this.applyGravity();
        if (character.otherDirection) {
            setStoppableInterval(() => {
                this.x -= 1.7;
            }, 1);
        } else {
            setStoppableInterval(() => {
                this.x += 1.7;
            }, 1);
        };
    }

    /**
     * Checks if this object (the throwable object/candy) collides with the given enemy.
     *
     * @param {Enemy} enemy - the enemy instance to check against
     * @returns {Boolean} - true if the objects are colliding, otherwise false
     */
    isHittingEnemy(enemy) {
        return this.x + this.width > enemy.x &&
            this.y + this.height > enemy.y &&
            this.x < enemy.x + enemy.width &&
            this.y < enemy.y + enemy.height;
    }

    /**
     * Checks if this object (the throwable object/candy) collides with the given boss
     * by using the boss's specified collision offset.
     *
     * @param {Boss} boss - the boss to check against
     * @returns {Boolean} - true if the objects are colliding, otherwise false
     */
    isHittingBoss(boss) {
        return this.x + this.width > boss.x + this.bossCollisionOffset.left &&
            this.y + this.height > boss.y + this.bossCollisionOffset.top &&
            this.x < boss.x + this.bossCollisionOffset.width &&
            this.y < boss.y + this.bossCollisionOffset.height;
    }
}