export class Background {
    x;
    y;
    img;
    width = 1280;
    height = 720;

    constructor() {

    }

    /**
     * Loads an image from the given path.
     * @param {String} path - path the image should be loaded from
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the object onto the given CanvasRenderingContext.
     * @param {CanvasRenderingContext2D} ctx - the 2D rendering context of the canvas
     */
    drawObject(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
    }
}