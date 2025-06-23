class Coin extends GroundObject {
    width = 50;
    height = 50;
    IMAGES_COIN = [
        'img/collectibles/coin/Gold_1.png',
        'img/collectibles/coin/Gold_2.png',
        'img/collectibles/coin/Gold_3.png',
        'img/collectibles/coin/Gold_4.png',
        'img/collectibles/coin/Gold_5.png',
        'img/collectibles/coin/Gold_6.png',
        'img/collectibles/coin/Gold_7.png',
        'img/collectibles/coin/Gold_8.png',
        'img/collectibles/coin/Gold_9.png',
        'img/collectibles/coin/Gold_10.png'
    ];

    constructor (x, y) {
        super().loadImage('img/collectibles/coin/Gold_1.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation('spinning', this.IMAGES_COIN, 10);
        }, 1000 / 60);
    }
}