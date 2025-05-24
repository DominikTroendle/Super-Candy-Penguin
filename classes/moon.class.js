class Moon extends MovingBackgroundObject {
    speed = 0.25;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        this.endX = 1280;
        this.amplitude = 140;

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