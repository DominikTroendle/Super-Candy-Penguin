class MovableObject {
    x;
    y;
    img;
    imageCache = {};
    currentImage = 0;
    speed;
    otherDirection = false;

    constructor() {
        
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
}