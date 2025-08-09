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
    clickSound.play();
    showGame();
    init();
});

settingsButton.addEventListener('click', () => {
    clickSound.play();
    resetOverlays();
    showOverlay('settings');
});

controlsButton.addEventListener('click', () => {
    clickSound.play();
    resetOverlays();
    showOverlay('controls');
});

replayButtons.forEach(e => e.addEventListener('click', () => {
    clickSound.play();
    gameEnded = false;
    resetOverlays();
    pauseAllMusic()
    init();
}));

startScreenButtons.forEach(e => e.addEventListener('click', () => {
    clickSound.play();
    setTimeout(() => window.location.reload(), 170);
}));

function init() {
    canvas = document.getElementById('canvas');
    window.world = new World(canvas, keyboard, this);
}

window.addEventListener('keydown', (event) => {
    if (event.key == "ArrowRight" || event.key == "d") keyboard.RIGHT = true;
    if (event.key == "ArrowLeft" || event.key == "a") keyboard.LEFT = true;
    if (event.key == "f") keyboard.F = true;
    if (event.key == " ") keyboard.SPACE = true;
});

window.addEventListener('keyup', (event) => {
    if (event.key == "ArrowRight" || event.key == "d") keyboard.RIGHT = false;
    if (event.key == "ArrowLeft" || event.key == "a") keyboard.LEFT = false;
    if (event.key == "f") keyboard.F = false;
    if (event.key == " ") keyboard.SPACE = false;
});