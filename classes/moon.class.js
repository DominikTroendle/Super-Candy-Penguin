class Moon extends MovingBackgroundObject {
    
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        this.moveRight();
    }
}