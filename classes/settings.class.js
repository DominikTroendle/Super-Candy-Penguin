import { DrawableObject } from "./drawable-object.class.js";

export class Settings extends DrawableObject {
    x = 40;
    width = 60;
    height = 60;
    isHovered = false;

    constructor() {
        super();
    }
}