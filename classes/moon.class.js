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

    animate() {
         setInterval( () => {
            this.x += this.speed;

            if (this.x > this.endX) {
                this.x = this.startX;
                this.y = this.startY;
            }
            const t = (this.x - this.startX) / (this.endX - this.startX);
            this.y = this.startY - Math.sin(t * Math.PI) * this.amplitude; 
        }, 1000 / 60);
    }
}