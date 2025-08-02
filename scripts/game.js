import { World } from '../classes/world.class.js';
import { Keyboard } from '../classes/keyboard.class.js';

let canvas;
let keyboard = new Keyboard();
let playButton = document.getElementById('button-play');
let settingsButton = document.getElementById('button-settings');
let controlsButton = document.getElementById('button-controls');
let replayButtons = document.querySelectorAll('.replay-button');
let startScreenButtons = document.querySelectorAll('.start-screen-button');

playButton.addEventListener('click', () => {
    showGame();
    init();
});

settingsButton.addEventListener('click', () => {
    resetOverlays();
    showOverlay('settings');
});

controlsButton.addEventListener('click', () => {
    resetOverlays();
    showOverlay('controls');
});

replayButtons.forEach(e => e.addEventListener('click', () => {
    gameEnded = false;
    resetOverlays();
    init();
}));

startScreenButtons.forEach(e => e.addEventListener('click', () => {
    window.location.reload();
}));

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