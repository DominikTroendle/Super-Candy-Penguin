class Moon extends Background {
    x = -50;
    y = -35;

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.x += 0.1;
        }, 1000 / 60);
    }
}