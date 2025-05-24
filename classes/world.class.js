class World {
    ctx;
    canvas;
    character = new Character();
    enemies = [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];

    staticBackground = [
        new BackgroundObject('img/background/l1-background.png', 0, 0),
        new BackgroundObject('img/background/l4-stars.png', 0, 0),
        new BackgroundObject('img/background/l2-northern-lights01.png', 0, 0),
        new BackgroundObject('img/background/l5-northern-lights02.png', 0, 0)
    ];
    
    movingBackground = [
        new Moon('img/background/l6-moon.png', -50, -35),
        new MovingBackgroundObject('img/background/l7-mountains01.png', 0, 0),
        new MovingBackgroundObject('img/background/l8-mountains02.png', 0, 0),
        new MovingBackgroundObject('img/background/l9-ground.png', 0, 0)
    ];
    
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addObjectsToCanvas(this.staticBackground);
        this.addObjectsToCanvas(this.movingBackground);
        this.addObjectsToCanvas(this.enemies);
        this.addToCanvas(this.character);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToCanvas(objects) {
        objects.forEach(o => {
            this.addToCanvas(o);
        });
    }

    addToCanvas(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
    }
}