class Enemy extends MovableObject {
    x = 640;
    y = 520;
    img;
    width = 100;
    height = 80;

    constructor() {
        super().loadImage('img/enemys/Monster02/Idle/skeleton-Idle_0.png');

        this.x = 640 + Math.random() * 500;
    }
}