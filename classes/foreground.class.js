class Foreground {
    x;
    y;
    width;
    height;
    img;
    imageCache = {};
    currentImage = 0;

    constructor() {

    }

    drawObject(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadRandomImg(arr) {
        this.img = new Image();
        this.img.src = arr[Math.floor((Math.random() * arr.length))];
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }

    playAnimation(name, images, fps) {
        if (this.currentAnimation !== name) {
            this.currentAnimation = name;
            this.currentImage = 0;
            this.lastAnimationFrameTime = Date.now();
            this.animationFinished = false;
        }
        if (name === 'dead' && this.animationFinished) return;
        let now = Date.now();
        let frameDuration = 1000 / fps;
        if (!this.currentAnimation || (now - this.lastAnimationFrameTime) >= frameDuration) {
            this.animateImages(images, name);
            this.lastAnimationFrameTime = now;
        }
    }

    animateImages(imagesArr, name) {
        let i = this.currentImage % imagesArr.length;
        let path = imagesArr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        if (i >= imagesArr.length - 1 && name === 'dead') this.animationFinished = true;
    }
}