export class DrawableObject {
    x;
    y;
    width;
    height;
    img;
    imageCache = {};
    currentImage = 0;

    constructor() {

    }

    /**
     * Draws the current object image on the canvas.
     *
     * @param {CanvasRenderingContext2D} ctx - the 2D rendering context of the canvas
     */
    drawObject(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
    }

    /**
     * Loads a single image and sets it as the object's current image.
     *
     * @param {String} path - the path to the image file
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads a random image from the given array and sets it as the current image.
     *
     * @param {Array} arr - array of image file paths
     */
    loadRandomImg(arr) {
        this.img = new Image();
        this.img.src = arr[Math.floor((Math.random() * arr.length))];
    }

    /**
     * Preloads multiple images into the object's image cache.
     *
     * @param {Array} arr - array of image file paths
     */
    loadImages(arr) {
        arr.forEach((path) => {
            const img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Plays the given animation sequence at a specified frame rate.
     * If the animation changes, it is reset. Prevents replaying the "dead"
     * animation after it has finished once.
     *
     * @param {String} name - the name of the animation
     * @param {Array} images - array of image paths representing frames of the animation
     * @param {Number} fps - frames per second for the animation
     */
    playAnimation(name, images, fps) {
        this.resetAnimation(name);
        if (name === 'dead' && this.animationFinished) return;
        const now = Date.now();
        const frameDuration = 1000 / fps;
        if (!this.currentAnimation || (now - this.lastAnimationFrameTime) >= frameDuration) {
            this.animateImages(images, name);
            this.lastAnimationFrameTime = now;
        };
    }

    /**
     * Resets animation state if a new animation is requested.
     *
     * @param {String} name - the name of the animation
     */
    resetAnimation(name) {
        if (this.currentAnimation !== name) {
            this.currentAnimation = name;
            this.currentImage = 0;
            this.lastAnimationFrameTime = Date.now();
            this.animationFinished = false;
        };
    }

    /**
     * Animates the given array of images by cycling through the array.
     * Updates the current image and marks the animation as finished if
     * the "dead" animation has reached its last frame.
     *
     * @param {Array} imagesArr - array of image file paths
     * @param {String} name - the name of the animation
     */
    animateImages(imagesArr, name) {
        const i = this.currentImage % imagesArr.length;
        const path = imagesArr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        if (i >= imagesArr.length - 1 && name === 'dead') this.animationFinished = true;
    }
}