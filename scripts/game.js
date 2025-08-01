import { World } from '../classes/world.class.js';
import { Keyboard } from '../classes/keyboard.class.js';

let canvas;
let keyboard = new Keyboard();
let playButton = document.getElementById('button-play');
let replayButtons = document.querySelectorAll('.replay-button');

window.addEventListener('DOMContentLoaded', () => {
    checkGameStatus();
});

window.addEventListener('beforeunload', (e) => {
    if (gameStarted && !gameEnded) {
        e.preventDefault();
    };
});

playButton.addEventListener('click', () => {
    setLocalStorage(true);
    showGame();
    init();
});

replayButtons.forEach(e => e.addEventListener('click', () => {
    setLocalStorage(true);
    gameEnded = false;
    restartGame();
    init();
}));

function init() {
    console.log("init called");
    canvas = document.getElementById('canvas');
    window.world = new World(canvas, keyboard, this);
    gameStarted = true;
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