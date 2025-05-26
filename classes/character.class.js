class Character extends MovableObject {
    x = 0;
    y = 280;
    width = 547;
    height = 350;
    collisionOffset = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    };
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
    IMAGES_HURT = [
        'img/characters/Character02/Confused/All Characters-Character02-Confused_00.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_01.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_02.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_03.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_04.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_05.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_06.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_07.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_08.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_09.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_10.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_11.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_12.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_13.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_14.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_15.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_16.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_17.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_18.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_19.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_20.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_21.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_22.png',
        'img/characters/Character02/Confused/All Characters-Character02-Confused_23.png'
    ];
    IMAGES_DEAD = [
        'img/characters/Character02/Dead/All Characters-Character02-Dead_00.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_01.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_02.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_03.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_04.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_05.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_06.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_07.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_08.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_09.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_10.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_11.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_12.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_13.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_14.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_15.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_16.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_17.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_18.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_19.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_20.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_21.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_22.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_23.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_24.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_25.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_26.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_27.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_28.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_29.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_30.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_31.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_32.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_33.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_34.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_35.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_36.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_37.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_38.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_39.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_40.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_41.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_42.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_43.png',
        'img/characters/Character02/Dead/All Characters-Character02-Dead_44.png'
    ];
    world;
    currentAnimation;

    constructor() {
        super().loadImage('img/characters/Character02/Idle/All Characters-Character02-Idle_00.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.applyGravity();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.NO_KEY_PRESSED && !this.isAboveGround() && !this.isHurt() && !this.isDead()) {
                this.playAnimation('idle', this.IMAGES_IDLE);
            }
        }, 1000 / 19);

         setInterval(() => {
            if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.isAboveGround()&& !this.isHurt() && !this.isDead()) {
                this.playAnimation('walking', this.IMAGES_WALKING);
            }
        }, 1000 / 30);

        setInterval(() => {
            if (this.isAboveGround() && !this.isHurt()) {
                this.playAnimation('jumping', this.IMAGES_JUMPING);
            }
        }, 1000 / 25);

        setInterval(() => {
            if (this.isHurt() && !this.isDead()) {
                this.playAnimation('hurt', this.IMAGES_HURT);
            }
        }, 1000 / 48)
        
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation('dead', this.IMAGES_DEAD);
            }
        }, 1000 / 45);

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isDead()) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0 && !this.isDead()) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround() && !this.isDead()) {
                this.jump();
            }
            this.world.camera_x = -this.x;
        }, 1000 / 30);
    }

    drawBorder(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x + 220, this.y + 150, 115, 142);
        ctx.stroke();
    }
}