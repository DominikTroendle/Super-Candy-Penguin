import { MovableObject } from "./movable-object.class.js";

export class Enemy extends MovableObject {
    character;

    constructor() {
        super();
    }

    /**
     * Assigns the given character instance to the enemy and starts the enemy's animation loop.
     *
     * @param {Character} character - the player character instance that the enemy interacts with
     */
    setCharacter(character) {
        this.character = character;
        this.animate();
    }
}