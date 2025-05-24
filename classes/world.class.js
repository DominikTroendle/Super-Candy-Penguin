class World {
    ctx;
    canvas;
    keyboard;
    camera_x = 0;

    character = new Character();
    enemies = [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];

    staticBackground = [
        new BackgroundObject('img/background/l1-background.png', 0, 0),
        new BackgroundObject('img/background/l4-stars.png', 0, 0),
        new Moon('img/background/l6-moon.png', -240, 10),
        new BackgroundObject('img/background/l2-northern-lights01.png', 0, 0),
        new BackgroundObject('img/background/l5-northern-lights02.png', 0, 0),
        
    ];
    
    movingBackground = [
        new MovingBackgroundObject('img/background/l7-mountains01.png', 0, 0, 0.3),
        new MovingBackgroundObject('img/background/l8-mountains02.png', 0, 0, 0.5),
        new MovingBackgroundObject('img/background/l9-ground.png', 0, 0, 1)
    ];
    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addObjectsToCanvas(this.staticBackground);
        this.addLoopingObjectsToCanvas(this.movingBackground);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToCanvas(this.enemies);
        this.addToCanvas(this.character);
        this.ctx.translate(-this.camera_x, 0);
        
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
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if (object.otherDirection) {
            this.ctx.restore();
            object.x = object.x * -1;
        }
    }

    addLoopingObjectsToCanvas(objects) {
        objects.forEach(o => {
            let scrollFactor = o.scrollFactor;
            let relCamera_x = this.camera_x * scrollFactor;
            let startX = Math.floor(-relCamera_x / o.width) * o.width;
            let endX = -relCamera_x + this.canvas.width;
            for (let x = startX; x < endX + o.width; x += o.width) {
                let drawX = x + relCamera_x;
                this.ctx.drawImage(o.img, drawX, o.y, o.width, o.height);
        }
        })
    }
}