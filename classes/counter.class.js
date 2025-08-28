import { DrawableObject } from "./drawable-object.class.js";

export class Counter extends DrawableObject {
    
    constructor () {
        super();
    }

    /**
     * Draws the counter and its value (e.g., coins, candies) on the given canvas context.
     *
     * @param {CanvasRenderingContext2D} ctx - the 2D rendering context of the canvas
     * @param {{ currentAmount: number }} object - the object containing the current counter value
     */
    drawCounter(ctx, object) {
        ctx.font = '48px Modak';
        ctx.fillStyle = 'white';
        ctx.fillText(object.currentAmount, this.x + 65, this.y + 40);
    }

    /**
     * Increases the given counter object's value by 1.
     *
     * @param {{ currentAmount: number }} object - the counter object to increase
     */
    increaseCount(object) {
        object.currentAmount++;
    }

    /**
     * Decreases the given counter object's value by 1.
     *
     * @param {{ currentAmount: number }} object - the counter object to decrease
     */
    decreaseCount(object) {
        object.currentAmount--;
    }
}