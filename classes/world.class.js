import { Character } from '../classes/character.class.js';
import { Statusbar } from '../classes/statusbar.class.js';
import { CoinCounter } from '../classes/coin-counter.class.js';
import { CandyCounter } from '../classes/candy-counter.class.js';
import { CandyManager } from './candy-manager.class.js';
import { Level1 } from '../levels/level1.class.js';
import { Endboss } from '../classes/endboss.class.js';
import { Counter } from './counter.class.js';
import { BossHealthbar } from './boss-healthbar.class.js';
import { MusicMuteButton } from './music-mute-button.class.js';
import { SoundMuteButton } from './sound-mute-button.class.js';

export class World {
    ctx;
    canvas;
    keyboard;
    game;
    camera_x = 0;

    character = new Character();
    statusbar = new Statusbar();
    coinCounter = new CoinCounter();
    candyCounter = new CandyCounter();
    candyManager = new CandyManager(this);
    settingsBtns = [
        new MusicMuteButton(),
        new SoundMuteButton()
    ];
    endboss = new Endboss();
    boss_healthbar = new BossHealthbar();
    level = new Level1();

    backgroundMusic = {
        bgMusic: Object.assign(document.createElement('audio'), {
            src: './audio/music/background-music.mp3',
            loop: true,
            volume: musicMuted ? 0 : musicVolume
        }),
        bossMusic: Object.assign(document.createElement('audio'), {
            src: './audio/music/bossfight_music.mp3',
            loop: true,
            volume: musicMuted ? 0 : musicVolume
        })
    }
    soundVol = soundMuted ? 0 : soundVolume;
    
    constructor(canvas, keyboard, game) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.game = game;
        this.registerClickEvents();
        this.setWorld();
        this.loop();
        this.run();
        setTimeout(() => this.backgroundMusic.bgMusic.play(), 1000);
    }

    registerClickEvents() {
        this.canvas.addEventListener("click", (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            this.settingsBtns.forEach(btn => {
                if (btn.isClicked(mouseX, mouseY)) {
                    btn.onClick();
                };
            });
        });
    }

    /**
     * Initializes world references by connecting the character, the endboss, and all enemies to this world instance.
     */
    setWorld() {
        window.currentWorld = this;
        this.character.world = this;
        this.endboss.world = this;
        this.endboss.character = this.character;
        this.level.enemies.forEach(enemy => {
            enemy.setCharacter(this.character);
        });
        this.settingsBtns.forEach(btn => {
            btn.world = this;
        });
    }

    /**
     * Starts the main game logic loop that periodically checks collisions, throwable objects, and boss fight state.
     */
    run() {
        setStoppableInterval(() => {
            this.character.checkCollisions();
            this.candyManager.checkThrowableObject();
            this.character.checkBossFight();
            if (this.character.isBossfight) {
                this.endboss.checkSnowballs();
                this.backgroundMusic.bgMusic.pause();
                this.backgroundMusic.bossMusic.play();
            };
        }, 100);
    }

    /**
     * Clears the canvas and redraws the background and foreground objects with the current camera position applied.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.ctx.translate(this.camera_x, 0);
        this.drawForeground();
        this.ctx.translate(-this.camera_x, 0);
    }

    /**
     * Main render loop that continuously draws the world state using requestAnimationFrame.
     */
    loop() {
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    /**
     * Draws all background and UI elements such as static and moving backgrounds, status bars, and counters.
     */
    drawBackground() {
        this.addObjectsToCanvas(this.level.staticBackground);
        this.addLoopingObjectsToCanvas(this.level.movingBackground);
        this.addToCanvas(this.statusbar);
        this.addToCanvas(this.coinCounter);
        this.addToCanvas(this.candyCounter);
        if (!window.matchMedia('(pointer: coarse)').matches) this.addObjectsToCanvas(this.settingsBtns);
        if (this.character.isBossfight) this.addToCanvas(this.boss_healthbar);
    }

    /**
     * Draws all foreground elements such as enemies, items, the endboss, throwable objects, and the character.
     */
    drawForeground() {
        this.addObjectsToCanvas(this.level.candys);
        this.addObjectsToCanvas(this.level.coins);
        this.addObjectsToCanvas(this.level.hearts);
        this.addObjectsToCanvas(this.level.enemies);
        this.addToCanvas(this.endboss);
        this.addObjectsToCanvas(this.endboss.snowballs);
        this.addToCanvas(this.character);
        this.addObjectsToCanvas(this.candyManager.throwableObjects);
    }

    /**
     * Adds multiple objects to the canvas by calling addToCanvas for each.
     *
     * @param {Object} objects - list of drawable objects
     */
    addObjectsToCanvas(objects) {
        objects.forEach(o => {
            this.addToCanvas(o);
        });
    }

    /**
     * Adds a single object to the canvas, handles mirroring and calls the appropriate draw method depending on type.
     *
     * @param {Object} object - the object to draw on the canvas
     */
    addToCanvas(object) {
        let flip = object.otherDirection;
        if (flip) this.mirrorCtx(object);
        object.drawObject(this.ctx);
        if (object instanceof Counter) object.drawCounter(this.ctx, object);
        if (object instanceof BossHealthbar) object.drawBossName(this.ctx);
        if (flip) this.resetCtx(object);
    }

    /**
     * Adds looping background objects (parallax layers) to the canvas by using scroll factors,
     * repeating them seamlessly as the camera moves.
     *
     * @param {Object} objects - background objects to draw on the canvas
     */
    addLoopingObjectsToCanvas(objects) {
        objects.forEach(o => {
            let scrollFactor = o.scrollFactor;
            let relCamera_x = this.camera_x * scrollFactor;
            let startX = Math.floor(-relCamera_x / o.width) * o.width;
            let endX = -relCamera_x + this.canvas.width;
            for (let x = startX; x < endX + o.width; x += o.width) {
                let drawX = x + relCamera_x;
                this.ctx.drawImage(o.img, drawX, o.y, o.width + 0.5, o.height);
            };
        });
    }

    /**
     * Mirrors the rendering context horizontally to flip an object.
     *
     * @param {Object} object - the object to mirror
     */
    mirrorCtx(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    /**
     * Restores the rendering context after mirroring and resets the object's position.
     *
     * @param {Object} object - the object to reset
     */
    resetCtx(object) {
        this.ctx.restore();
        object.x = object.x * -1;
    }

    /**
     * Plays a sound effect by its key and using global sound settings.
     *
     * @param {String} key - the identifier for the sound file to play
     */
    playSound(key) {
        let sound = new Audio(`./audio/sounds/${key}.mp3`);
        if (window.matchMedia('(pointer: coarse)').matches) this.soundVol = soundMuted ? 0 : soundVolume;
        sound.volume = this.soundVol;
        sound.play();
    }
}