class World {
    ctx;
    canvas;
    character = new Character();
    enemies = [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];
    moon = new Moon();
    staticBackground = [
        new StaticBackgroundObject('img/background/l1-background.png')
    ];
    
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.staticBackground.forEach(background => this.addToCanvas(background));
        this.addToCanvas(this.moon);
        this.addToCanvas(this.character);
        this.enemies.forEach(enemy => this.addToCanvas(enemy));

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addToCanvas(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
    }
}