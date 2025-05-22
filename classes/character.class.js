class Character extends MovableObject {
    x = -20;
    y = 300;
    img;
    width = 400;
    height = 350;

    constructor() {
        super().loadImage('img/characters/Character02/Idle/All Characters-Character02-Idle_00.png');
    }

    jump() {

    }
}