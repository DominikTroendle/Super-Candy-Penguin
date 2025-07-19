import { MovableObject } from "./movable-object.class.js";

export class Snowball extends MovableObject {
    width = 150;
    height = 150;
    x;
    y;

    constructor(x, y) {
        super().loadImage('img/snowball/snowball.png');
        this.x = x;
        this.y = y;
        this.fly();
    }

    fly() {
        this.speedY = 33;
        this.applyGravity();
        setInterval(() => {
            this.x -= 1.7;
        }, 1);
    }
}