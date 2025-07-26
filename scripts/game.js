import { World } from '../classes/world.class.js';
import { Keyboard } from '../classes/keyboard.class.js';

let canvas;
let isGameOver = false;
let keyboard = new Keyboard();
let startButton = document.getElementById('button-play');

startButton.addEventListener('click', () => {
    init();
})

function init() {
    canvas = document.getElementById('canvas');
    window.world = new World(canvas, keyboard, this);
}

window.addEventListener('keydown', (event) => {
    if (event.key == "ArrowRight" || event.key == "d") keyboard.RIGHT = true;
    if (event.key == "ArrowLeft" || event.key == "a") keyboard.LEFT = true;
    if (event.key == "f") keyboard.F = true;
    // if (event.key == "s") keyboard.S = true;
    // slap function to be implemented in the future
    if (event.key == " ") keyboard.SPACE = true;
});

window.addEventListener('keyup', (event) => {
    if (event.key == "ArrowRight" || event.key == "d") keyboard.RIGHT = false;
    if (event.key == "ArrowLeft" || event.key == "a") keyboard.LEFT = false;
    if (event.key == "f") keyboard.F = false;
    // if (event.key == "s") keyboard.S = false;
    // slap function to be implemented in the future
    if (event.key == " ") keyboard.SPACE = false;
});