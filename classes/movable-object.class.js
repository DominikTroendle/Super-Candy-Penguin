class MovableObject {
    x;
    y;
    img;
    imageCache = {};
    currentImage = 0;
    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    collisionOffset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    life = 100;
    lastHit = 0;

    constructor() {

    }

    drawObject(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
    }

    drawBorder(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    animateImages(imagesArr) {
        let i = this.currentImage % imagesArr.length;
        let path = imagesArr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimation(name, images) {
        this.currentAnimation = name;
        this.animateImages(images);
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        return this.y < 280;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }

    isColliding(object) {
        return this.x + 220 + 115 > object.x &&
            this.y + 150 + 142 > object.y &&
            this.x + 220 < object.x + object.width &&
            this.y + 150 < object.y + object.height
    }

    hit() {
        this.life -= 5;
        if (this.life < 0) {
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isDead() {
        return this.life == 0;
    }
}