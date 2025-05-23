class Enemy extends MovableObject {
    y = 490;
    width = 131;
    height = 80;

    constructor() {
        super().loadImage('img/enemys/Monster02/Idle/skeleton-Idle_0.png');

        this.x = 640 + Math.random() * 500;
    }
}