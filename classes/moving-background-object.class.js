class MovingBackgroundObject extends Background {
    speed = 0.1;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }

    moveRight() {
        setInterval( () => {
            this.x += this.speed;
        }, 1000 / 60);
    }
}