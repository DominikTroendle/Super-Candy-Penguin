import { ENDBOSS_IMAGES } from "../scripts/endboss-images.js";
import { Enemy } from "./enemy.class.js";
import { Snowball } from "./snowball.class.js";

export class Endboss extends Enemy {
    x = 3840 + 1280 - 320;
    y = 275;
    width = 300;
    height = 300;
    health = 100;
    snowballs = [];
    otherDirection = false;
    speed = 1;
    targetLocation;
    lastLocation = 4800;
    IMAGES_IDLE = ENDBOSS_IMAGES.idle;
    IMAGES_WALKING = ENDBOSS_IMAGES.walking;
    IMAGES_ATTACKING = ENDBOSS_IMAGES.attacking;
    IMAGES_DEATH = ENDBOSS_IMAGES.death;

    constructor() {
        super().loadImage('img/enemys/Boss/Idle/skeleton-Idle_0.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_DEATH);
        this.generateTargetLocation();
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            if (this.health <= 0) {
                this.playAnimation('dead', this.IMAGES_DEATH, 10);
                endGame('W');
                setTimeout(() => this.world.backgroundMusic.bgMusic.pause(), 1200);
            } else if (this.bossIsAttacking(this.character) && !this.character.isDead()) {
                this.faceCharacter();
                this.playAnimation('attacking', this.IMAGES_ATTACKING, 55);
            } else if (this.world.character.isBossfight && !this.character.isDead()) {
                this.playAnimation('walking', this.IMAGES_WALKING, 18);
                this.moveRandom();
            } else {
                this.playAnimation('idle', this.IMAGES_IDLE, 18);
            }
        }, 1000 / 60);
    }

    isDamaged() {
        this.health -= 10;
        if (this.health <= 0) this.health = 0;
        this.world.boss_healthbar.setPercentage(this.health);
    }

    moveRandom() {
        if (this.x === this.targetLocation) {
            this.generateTargetLocation();
            this.throwingAttack();
        }
        if (this.targetLocation === this.lastLocation || this.x === this.targetLocation) return;
        this.otherDirection = this.x < this.targetLocation;
        this.x += (this.otherDirection ? 1 : -1) * this.speed;
    }

    generateTargetLocation() {
        this.targetLocation = Math.floor(Math.random() * (4800 - 4200 + 1)) + 4200;
    }

    faceCharacter() {
        this.otherDirection = this.character.x + this.characterOffset.left > this.x + this.bossCollisionOffset.left;
    }

    throwingAttack() {
        let snowball = new Snowball(this.x, this.y);
        this.snowballs.push(snowball);
    }

    checkSnowballs() {
        this.snowballs = this.snowballs.filter(snowball => {
            if (snowball.y > 720) {
                return false;
            } else if (this.checkSnowballCollision(snowball)) {
                return false;
            };
            return true;
        });
    }

    checkSnowballCollision() {
        for (let i = 0; i < this.snowballs.length; i++) {
            if (this.world.character.isColliding(this.snowballs[i])) {
                this.world.character.hit();
                this.world.statusbar.setPercentage(this.world.character.life);
                return true;
            };
        };
    }

    drawBorder(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'red';
        ctx.rect(this.x + this.bossCollisionOffset.left, this.y + this.bossCollisionOffset.top, this.bossCollisionOffset.width, this.bossCollisionOffset.height);
        ctx.stroke();
    }
}