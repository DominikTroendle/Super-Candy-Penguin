class Enemy extends MovableObject {
    y = 490;
    width = 131;
    height = 80;
    IMAGES_WALKING = [
        'img/enemys/Monster02/Walk/skeleton-Walk_0.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_1.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_2.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_3.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_4.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_5.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_6.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_7.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_8.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_9.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_10.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_11.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_12.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_13.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_14.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_15.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_16.png',
        'img/enemys/Monster02/Walk/skeleton-Walk_17.png'
    ];
    speed = 0.2;

    constructor() {
        super().loadImage('img/enemys/Monster02/Walk/skeleton-Walk_0.png');
        this.x = 640 + Math.random() * 500;
        this.speed = this.speed + Math.random() * 0.7;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        // this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 18);
    }
}