import { MovableObject } from "./movable-object.class.js";

export class Snowball extends MovableObject {
    width = 100;
    height = 100;
    x;
    y;

    constructor(x, y) {
        super().loadImage('img/snowball/snowball.png');
        this.x = x;
        this.y = y;
        this.fly();
    }

    /**
     * Makes this object (the boss's snowball) fly by giving it an initial upward velocity, applying gravity over time
     * and moving the object horizontally to the left at a constant speed.
     */
    fly() {
        this.speedY = 40;
        this.applyGravity();
        setStoppableInterval(() => {
            this.x -= 1.7;
        }, 1);
    }
}