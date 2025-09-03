import { DrawableObject } from "./drawable-object.class.js";

export class Settings extends DrawableObject {
    x = 40;
    width = 60;
    height = 60;

    constructor() {
        super();
    }

    /**
     * Checks if the given mouse coordinates are within this element's boundaries.
     *
     * @param {Number} mouseX - the X position of the mouse click
     * @param {Number} mouseY - the Y position of the mouse click
     * @returns {Boolean} - true if the mouse click is inside the element, otherwise false
     */
    isClicked(mouseX, mouseY) {
        return (
            mouseX >= this.x &&
            mouseX <= this.x + this.width &&
            mouseY >= this.y &&
            mouseY <= this.y + this.height
        );
    }
}