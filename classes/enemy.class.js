import { MovableObject } from "./movable-object.class.js";

export class Enemy extends MovableObject {
    character;

    constructor() {
        super();
    }

    setCharacter(character) {
        this.character = character;
        this.animate();
    }
}