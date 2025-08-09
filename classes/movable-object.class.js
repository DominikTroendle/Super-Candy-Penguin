import { Character } from "./character.class.js";
import { DrawableObject } from "./drawable-object.class.js";

export class MovableObject extends DrawableObject {
    speed;
    speedY = 0;
    acceleration = 4;
    life = 100;
    lastHit = 0;
    groundY = 570;
    characterOffset = {
        top: 150,
        left: 220,
        width: 115,
        height: 142
    };
    collisionOffset = {
        top: 170,
        left: 240,
        bottom: 10,
        width: 75,
        height: 112
    };
    bossCollisionOffset = {
        top: 20,
        left: 55,
        width: 190,
        height: 280
    };
    isBossfight = false;

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
        setStoppableInterval(() => {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            if (this instanceof Character && !this.isAboveGround()) {
                this.y = 280;
                this.speedY = 0;
            };       
        }, 1000 / 25)
    }

    isAboveGround() {
       return this.y < 280;
    }

    isOnGround() {
        return this.y >= 280;
    }

    moveRight() {
        if (this.x < this.world.level.level_end_x) {
            this.x += this.speed;
        }
    }

    moveLeft() {
        if (!this.isBossfight) {
            this.x -= this.speed;
        }
        if (this.isBossfight && this.x >= 3650) {
            this.x -= this.speed;
        }
    }

    enemyMoveLeft() {
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

    isAttacking(character) {
        return this.x < character.x + this.collisionOffset.left + this.collisionOffset.width &&
            this.y < character.y + this.collisionOffset.top + this.collisionOffset.height &&
            this.x + this.width > character.x + this.collisionOffset.left &&
            this.y + this.height > character.y + this.collisionOffset.top;
    }

    bossIsAttacking(character) {
        return this.x + this.bossCollisionOffset.left < character.x + this.collisionOffset.left + this.collisionOffset.width &&
            this.y + this.bossCollisionOffset.top < character.y + this.collisionOffset.top + this.collisionOffset.height &&
            this.x + this.bossCollisionOffset.left + this.bossCollisionOffset.width > character.x + this.collisionOffset.left &&
            this.y + this.bossCollisionOffset.top + this.bossCollisionOffset.width > character.y + this.collisionOffset.top;
    }

    isJumpedOnTop(object) {
        return this.y + this.collisionOffset.top + this.collisionOffset.height >= this.groundY - object.height &&
            this.x + this.collisionOffset.left + this.collisionOffset.width > object.x &&
            this.x + this.collisionOffset.left < object.x + object.width &&
            this.y < 280 + object.height &&
            this.speedY < 0;
    }

    hit() {
        this.life -= 20;
        if (this.life < 0) {
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
        if (this.life == 0) this.world.playSound('character_dead');
    }

    timeSinceLastHit() {
        return new Date().getTime() - this.lastHit;
    }

    canBeHit() {
        return this.timeSinceLastHit() > 550;
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