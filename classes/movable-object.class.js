class MovableObject {
    x;
    y;
    img;
    imageCache = {};

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

    moveRight() {
        
    }

    moveLeft() {

    }
}