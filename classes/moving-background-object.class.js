class MovingBackgroundObject extends Background {

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }

    move() {
        
    }
}