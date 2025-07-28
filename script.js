let gameEnded = false;
let intervalIds = [];

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function startGame() {
    document.getElementById('penguin-animated').classList.remove('penguin-animation-idle');
    document.getElementById('penguin-animated').style.backgroundImage = "url('./img/menu-screens/sprite-sheets/penguin-jump-sprite-sheet.png')";
    document.getElementById('start-screen').style.gap = '11.5px';
    document.getElementById('penguin-animated').classList.add('penguin-animation-jump');
    setTimeout(() => {
        document.getElementById('start-screen').classList.add('d-none');
        document.getElementById('penguin-animated').classList.remove('penguin-animation-jump');
    }, 1000);
}

function endGame(condition) {
    if (gameEnded) return;
    gameEnded = true;
    let overlay;
    if (condition === "W") {
        overlay = "win-screen";
    } else {
        overlay = "game-over-screen";
    };
    setTimeout(() => {
        document.getElementById(overlay).classList.remove('d-none');
    }, 1200);
}

function restartGame() {
    intervalIds.forEach(clearInterval);
    intervalIds = [];
    gameEnded = false;
    document.getElementById('win-screen').classList.add('d-none');
    document.getElementById('game-over-screen').classList.add('d-none');
}