class MovableObject extends Foreground {
    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 4;
    collisionOffset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    life = 100;
    lastHit = 0;

    constructor() {
        super();
    }

    drawBorder(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 280;
        }
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 33;
    }

    isColliding(object) {
        return this.x + this.collisionOffset.left + this.collisionOffset.width > object.x &&
            this.y + this.collisionOffset.top + this.collisionOffset.height > object.y &&
            this.x + this.collisionOffset.left < object.x + object.width &&
            this.y + this.collisionOffset.top < object.y + object.height;
    }

    hit() {
        this.life -= 20;
        if (this.life < 0) {
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    timeSinceLastHit() {
        return new Date().getTime() - this.lastHit;
    }

    canBeHit() {
        return this.timeSinceLastHit() > 500;
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isDead() {
        return this.life == 0;
    }
}