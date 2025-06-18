class ThrowableObject extends MovableObject {
width = 60;
height = 60;

    constructor(x, y) {
        super().loadImage('img/candy/candy.png');
        this.x = x;
        this.y = y;
        this.throw(x, y);
    }
    
    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 33;
        this.applyGravity();
        setInterval(() => {
            this.x += 1.7;
        }, 1);
    }

    isHittingEnemy(enemy) {
        return this.x + this.width > enemy.x &&
            this.y + this.height > enemy.y &&
            this.x < enemy.x + enemy.width &&
            this.y < enemy.y + enemy.height;
    }
}