class Character extends MovableObject {
    x = 0;
    y = 280;
    width = 547;
    height = 350;
    characterOffset = {
        top: 150,
        left: 220,
        width: 115,
        height: 142
    };
    collisionOffset = {
        top: 170,
        left: 240,
        bottom: 10,
        width: 75,
        height: 112
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
        'img/characters/Character02/Idle/All Characters-Character02-Idle_18.png',
        'img/characters/Character02/Idle/All Characters-Character02-Idle_19.png'
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
    lastAnimationFrameTime;
    animationFinished;

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
            if (this.isDead()) {
                this.playAnimation('dead', this.IMAGES_DEAD, 45);
            } else if (this.isHurt()) {
                this.playAnimation('hurt', this.IMAGES_HURT, 48);
            } else if (this.isAboveGround()) {
                this.playAnimation('jumping', this.IMAGES_JUMPING, 25);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation('walking', this.IMAGES_WALKING, 30);
            } else {
                this.playAnimation('idle', this.IMAGES_IDLE, 20);
            }
        }, 1000 / 60);

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
        ctx.rect(this.x + this.characterOffset.left, this.y + this.characterOffset.top, this.characterOffset.width, this.characterOffset.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'red';
        ctx.rect(this.x + this.collisionOffset.left, this.y + this.collisionOffset.top, this.collisionOffset.width, this.collisionOffset.height);
        ctx.stroke();
    }
}