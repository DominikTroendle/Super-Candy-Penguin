let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (event) => {
    if (event.key == "ArrowRight" || event.key == "d") keyboard.RIGHT = true;
    if (event.key == "ArrowLeft" || event.key == "a") keyboard.LEFT = true;
    if (event.key == " ") keyboard.SPACE = true;
    updateNoKeyPressed();
});

window.addEventListener('keyup', (event) => {
    if (event.key == "ArrowRight" || event.key == "d") keyboard.RIGHT = false;
    if (event.key == "ArrowLeft" || event.key == "a") keyboard.LEFT = false;
    if (event.key == " ") keyboard.SPACE = false;
    updateNoKeyPressed();
});

function updateNoKeyPressed() {
    keyboard.NO_KEY_PRESSED = !(
        keyboard.RIGHT ||
        keyboard.LEFT ||
        keyboard.SPACE
    );
}