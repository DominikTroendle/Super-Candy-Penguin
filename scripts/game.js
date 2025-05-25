let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (event) => {
    keyboard.NO_KEY_PRESSED = false;
    if (event.key == "ArrowRight") keyboard.RIGHT = true;
    if (event.key == "ArrowLeft") keyboard.LEFT = true;
    if (event.key == "ArrowUp") keyboard.UP = true;
    if (event.key == "d") keyboard.RIGHT = true;
    if (event.key == "a") keyboard.LEFT = true;
    if (event.key == "w") keyboard.UP = true;
    if (event.key == " ") keyboard.SPACE = true;
});

window.addEventListener('keyup', (event) => {
    keyboard.NO_KEY_PRESSED = true;
    if (event.key == "ArrowRight") keyboard.RIGHT = false;
    if (event.key == "ArrowLeft") keyboard.LEFT = false;
    if (event.key == "ArrowUp") keyboard.UP = false;
    if (event.key == "d") keyboard.RIGHT = false;
    if (event.key == "a") keyboard.LEFT = false;
    if (event.key == "w") keyboard.UP = false;
    if (event.key == " ") keyboard.SPACE = false;
});