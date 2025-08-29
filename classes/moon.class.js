import { MovingBackgroundObject } from '../classes/moving-background-object.class.js';

export class Moon extends MovingBackgroundObject {
    speed = 0.25;
    amplitude = 140;
    endX = 1280;

    constructor(imagePath, x, y) {
        super(imagePath, x, y);
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        this.animate();
    }

    /**
     * Starts the moon's main animation.
     */
    animate() {
         setStoppableInterval( () => {
             this.moveMoon();
        }, 1000 / 60);
    }

    /**
     * Updates the moon's position to create a smooth curved movement across the screen
     * which resets to the starting position when the moon reaches the end position.
     *
     */
    moveMoon() {
        this.x += this.speed;
        if (this.x > this.endX) {
            this.x = this.startX;
            this.y = this.startY;
        };
        const t = (this.x - this.startX) / (this.endX - this.startX);
        this.y = this.startY - Math.sin(t * Math.PI) * this.amplitude;
    }
}