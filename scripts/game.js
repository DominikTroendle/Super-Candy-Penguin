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
    stopAllMusic();
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