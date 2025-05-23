class Background {
    x;
    y;
    img;
    width = 1280;
    height = 720;

    constructor() {

    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
}