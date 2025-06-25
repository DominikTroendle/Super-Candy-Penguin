export class Background {
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
}