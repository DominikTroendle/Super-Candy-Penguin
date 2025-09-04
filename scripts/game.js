import { World } from '../classes/world.class.js';
import { Keyboard } from '../classes/keyboard.class.js';

let canvas;
const keyboard = new Keyboard();
const playButton = document.getElementById('button-play');
const settingsButton = document.getElementById('button-settings');
const controlsButton = document.getElementById('button-controls');
const imprintPageButton = document.getElementById('button-imprint');
const replayButtons = document.querySelectorAll('.replay-button');
const startScreenButtons = document.querySelectorAll('.start-screen-button');

/**
 * Handles clicking the play button: plays a click sound, shows the game screen and initializes the world.
 */
playButton.addEventListener('click', () => {
    clickSound.play();
    gameEnded = false;
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
 * shows the mobile controls if the device is a touch device, stops all music and restarts the game world.
 */
replayButtons.forEach(e => e.addEventListener('click', () => {
    const media = window.matchMedia("(pointer: coarse)");
    clickSound.play();
    gameEnded = false;
    resetOverlays();
    if (!media.matches) document.getElementById('overlays').classList.add('d-none');
    if (media.matches) document.getElementById('mobile-controls').classList.remove('d-none');
    stopAllMusic();
    init();
}));

/**
 * Handles clicking any start screen button: plays a click sound, resets overlays and shows the start screen overlay.
 */
startScreenButtons.forEach(e => e.addEventListener('click', () => {
    clickSound.play();
    stopAllMusic();
    resetOverlays();
    showOverlay('start-screen');
    handleStartAnimation('reset');
}));

/**
 * Initializes the game world by getting the canvas element and creates a new {@link World} instance with the canvas and keyboard.
 * Ensures that click event listeners are only registered once for the canvas element.
 */
function init() {
    canvas = document.getElementById('canvas');
    if (!canvas.dataset.listenerSet) {
        registerClickEvents(canvas);
        canvas.dataset.listenerSet = "true";
    };
    window.world = new World(canvas, keyboard, this);
}

/**
 * Registers a click event listener on the given canvas element, translates mouse click coordinates into canvas coordinates, checks if any settings button
 * was clicked and triggers the corresponding buttons 'onClick' method.
 *
 * @param {HTMLCanvasElement} canvas - the canvas element on which to register the click events
 */
function registerClickEvents(canvas) {
    canvas.addEventListener("click", (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;

        window.world.settingsBtns.forEach(btn => {
            if (btn.isClicked(mouseX, mouseY)) {
                btn.world = window.world;
                btn.onClick();
            }
        });
    });
}