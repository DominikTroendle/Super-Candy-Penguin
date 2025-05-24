class Character extends MovableObject {
    x = 0;
    y = 280;
    width = 547;
    height = 350;
    speed = 7;
    IMAGES_IDLE = [
        'img/characters/Character02/Idle/All Characters-Character02-Idle_00.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_01.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_02.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_03.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_04.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_05.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_06.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_07.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_08.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_09.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_10.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_11.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_12.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_13.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_14.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_15.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_16.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_17.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_18.png'
    ];
    IMAGES_WALKING = [
        'img/characters/Character02/Walk/All Characters-Character02-Walk_00.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_01.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_02.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_03.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_04.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_05.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_06.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_07.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_08.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_09.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_10.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_11.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_12.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_13.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_14.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_15.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_16.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_17.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_18.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_19.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_20.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_21.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_22.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_23.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_24.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_25.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_26.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_27.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_28.png',
        'img/characters/Character02/Walk/All Characters-Character02-Walk_29.png',
    ];
    world;

    constructor() {
        super().loadImage('img/characters/Character02/Idle/All Characters-Character02-Idle_00.png');
        // this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        // this.animateIdle();
        this.animateWalking();
    }

    animateIdle() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 19);
    }

    animateWalking() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 30);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 35);
    }

    jump() {

    }
}