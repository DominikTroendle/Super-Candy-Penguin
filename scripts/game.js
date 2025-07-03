import { World } from '../classes/world.class.js';
import { Keyboard } from '../classes/keyboard.class.js';

let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('load', () => {
    init();
})

window.addEventListener('keydown', (event) => {
    if (event.key == "ArrowRight" || event.key == "d") keyboard.RIGHT = true;
    if (event.key == "ArrowLeft" || event.key == "a") keyboard.LEFT = true;
    // if (event.key == "f") keyboard.F = true;
    
    // if (event.key == "s") keyboard.S = true;
    
    if (event.key == " ") keyboard.SPACE = true;
});

window.addEventListener('keyup', (event) => {
    if (event.key == "ArrowRight" || event.key == "d") keyboard.RIGHT = false;
    if (event.key == "ArrowLeft" || event.key == "a") keyboard.LEFT = false;
    // if (event.key == "f") keyboard.F = false;
    // if (event.key == "s") keyboard.S = false;
    if (event.key == " ") keyboard.SPACE = false;
});

window.addEventListener('keypress', (event) => {
    if (event.key == "f") {
        keyboard.F = true;
        setTimeout(() => {
            keyboard.F = false;
        }, 100);
    }
    if (event.key == "s") {
        keyboard.S = true;
        setTimeout(() => {
            keyboard.S = false;
        }, 1000 / 105);
    }
})
// https://stackoverflow.com/questions/77667024/how-can-i-code-a-cooldown-to-a-key-press