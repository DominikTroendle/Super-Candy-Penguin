class Character extends MovableObject {
    x = 0;
    y = 280;
    width = 547;
    height = 350;
    speed = 25;
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
    IMAGES_JUMPING = [
        'img/characters/Character02/Jump/All Characters-Character02-Jump_00.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_01.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_02.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_03.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_04.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_05.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_06.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_07.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_08.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_09.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_10.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_11.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_12.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_13.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_14.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_15.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_16.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_17.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_18.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_19.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_20.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_21.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_22.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_23.png',
        'img/characters/Character02/Jump/All Characters-Character02-Jump_24.png'
    ];
    world;
    currentAnimation;

    constructor() {
        super().loadImage('img/characters/Character02/Idle/All Characters-Character02-Idle_00.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.animate();
        this.applyGravity();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.NO_KEY_PRESSED && !this.isAboveGround()) {
                this.playAnimation('idle', this.IMAGES_IDLE);
            }
        }, 1000 / 19);

         setInterval(() => {
            if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.isAboveGround()) {
                this.playAnimation('walking', this.IMAGES_WALKING);
            }
        }, 1000 / 30);

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation('jumping', this.IMAGES_JUMPING);
            }
        }, 1000 / 25);

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
            }
            
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x;
        }, 1000 / 30);
    }
}