import { CHARACTER_IMAGES } from "../scripts/character-images.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject {
    x = 0;
    y = 280;
    width = 547;
    height = 350;
    speed = 25;
    IMAGES_IDLE = CHARACTER_IMAGES.idle;
    IMAGES_WALKING = CHARACTER_IMAGES.walking;
    IMAGES_JUMPING = CHARACTER_IMAGES.jumping;
    IMAGES_SLAP = CHARACTER_IMAGES.slap;
    IMAGES_HURT = CHARACTER_IMAGES.hurt;
    IMAGES_DEAD = CHARACTER_IMAGES.dead;
    world;
    currentAnimation;
    lastAnimationFrameTime;
    animationFinished;
    otherDirection = false;

    constructor() {
        super().loadImage('img/characters/Character02/Idle/All Characters-Character02-Idle_00.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        console.log(intervalIds);
        
        this.applyGravity();
    }

    animate() {
        setStoppableInterval(() => {
            if (this.isDead()) {
                this.playAnimation('dead', this.IMAGES_DEAD, 45);
                endGame('L');
                setTimeout(() => this.world.backgroundMusic.bgMusic.pause(), 1200);
            } else if (this.isHurt()) {
                this.playAnimation('hurt', this.IMAGES_HURT, 48);
            } else if (this.isAboveGround()) {
                this.playAnimation('jumping', this.IMAGES_JUMPING, 25);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation('walking', this.IMAGES_WALKING, 30);
            } else {
                this.playAnimation('idle', this.IMAGES_IDLE, 20);
            }
        }, 1000 / 60);

        setStoppableInterval(() => {
            if (this.world.keyboard.RIGHT && !this.isDead()) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && !this.isDead() && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround() && !this.isDead()) {
                this.jump();
                this.world.playSound('jump');
            }
            if (this.x < 3850 && !this.isBossfight) this.world.camera_x = -this.x;
        }, 1000 / 30);
    }

    checkCollisions() {
        if (this.isBossfight && this.canBeHit() && this.world.endboss.bossIsAttacking(this) && !this.isDead()) {
            this.hit();
            this.world.playSound('hurt');
            this.world.statusbar.setPercentage(this.life);
        }
        this.world.level.enemies.forEach(enemy => {
            if (this.isColliding(enemy) && this.canBeHit() && !this.isJumpedOnTop(enemy) && !this.isDead()) {
                this.hit();
                this.world.playSound('hurt');
                this.world.statusbar.setPercentage(this.life);
            };
        });
        this.world.level.enemies = this.world.level.enemies.filter(enemy => {
            if (this.isJumpedOnTop(enemy)) {
                return false;
            }
            return true;
        });
        this.world.level.candys = this.world.level.candys.filter(candy => {
            if (this.isColliding(candy)) {
                this.world.candyCounter.increaseCount(this.world.candyCounter);
                return false;
            }
            return true;
        });
        this.world.level.coins = this.world.level.coins.filter(coin => {
            if (this.isColliding(coin)) {
                this.world.coinCounter.increaseCount(this.world.coinCounter);
                return false;
            }
            return true;
        });
        this.world.level.hearts = this.world.level.hearts.filter(heart => {
            if (this.isColliding(heart) && this.life < 100) {
                this.life += 20;
                this.world.statusbar.setPercentage(this.life);
                return false;
            }
            return true;
        })
    }

    checkBossFight() {
        if (this.x > 3840) {
            this.isBossfight = true;
        }
    }

    drawBorder(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x + this.characterOffset.left, this.y + this.characterOffset.top, this.characterOffset.width, this.characterOffset.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'red';
        ctx.rect(this.x + this.collisionOffset.left, this.y + this.collisionOffset.top, this.collisionOffset.width, this.collisionOffset.height);
        ctx.stroke();
    }
}