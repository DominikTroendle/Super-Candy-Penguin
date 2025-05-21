let canvas;
let ctx;
let character = new Image();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    character.src = '../img/characters/Character02/Idle/All Characters-Character02-Idle_00.png';

    setTimeout(function () {
        ctx.drawImage(character, 20, 20, 400, 300);
    }, 100);
}