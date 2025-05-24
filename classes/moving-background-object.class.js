class MovingBackgroundObject extends Background {
    
    constructor(imagePath, x, y, scrollFactor) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.scrollFactor = scrollFactor;
    }
}