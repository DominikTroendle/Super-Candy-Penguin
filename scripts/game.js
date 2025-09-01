import { World } from '../classes/world.class.js';
import { Keyboard } from '../classes/keyboard.class.js';

let canvas;
let keyboard = new Keyboard();
let playButton = document.getElementById('button-play');
let settingsButton = document.getElementById('button-settings');
let controlsButton = document.getElementById('button-controls');
let imprintPageButton = document.getElementById('button-imprint');
let replayButtons = document.querySelectorAll('.replay-button');
let startScreenButtons = document.querySelectorAll('.start-screen-button');

/**
 * Handles clicking the play button: plays a click sound, shows the game screen and initializes the world.
 */
playButton.addEventListener('click', () => {
    clickSound.play();
    showGame();
    init();
});

/**
 * Handles clicking the settings button: plays a click sound, resets overlays and shows the settings overlay.
 */
settingsButton.addEventListener('click', () => {
    clickSound.play();
    resetOverlays();
    showOverlay('settings');
});

/**
 * Handles clicking the controls button: plays a click sound, resets overlays and shows the controls overlay.
 */
controlsButton.addEventListener('click', () => {
    clickSound.play();
    resetOverlays();
    showOverlay('controls');
});

/**
 * Handles clicking the imprint button: plays a click sound, resets overlays and shows the imprint overlay.
 */
imprintPageButton.addEventListener('click', () => {
    clickSound.play();
    resetOverlays();
    showOverlay('imprint');
});

/**
 * Handles clicking any replay button: plays a click sound, resets the game state and overlays,
 * stops all music and restarts the game world.
 */
replayButtons.forEach(e => e.addEventListener('click', () => {
    clickSound.play();
    gameEnded = false;
    resetOverlays();
    stopAllMusic();
    init();
}));

/**
 * Handles clicking any start screen button: plays a click sound and reloads the page after a short delay.
 */
startScreenButtons.forEach(e => e.addEventListener('click', () => {
    clickSound.play();
    setTimeout(() => window.location.reload(), 170);
}));

/**
 * Initializes the game worldby getting the canvas element and creates a new {@link World} instance with the canvas and keyboard.
 */
function init() {
    canvas = document.getElementById('canvas');
    window.world = new World(canvas, keyboard, this);
}