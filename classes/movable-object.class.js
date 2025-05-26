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

    constructor() {

    }

    drawObject(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
    }

    drawBorder(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'blue';
        if (this instanceof Character) {
            ctx.rect(this.x + 225, this.y + 150, 105, 142);
        } else {
            ctx.rect(this.x, this.y, this.width, this.height);
        }
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
}