let gameStarted;
let gameEnded = false;
let intervalIds = [];

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function checkGameStatus() {
    gameStarted = getLocalStorage('gameStarted');
    if (gameStarted) {
        document.getElementById('start-screen').classList.add('d-none');
        document.getElementById('penguin-animated').classList.remove('penguin-animation-idle');
        document.getElementById('penguin-animated').classList.remove('penguin-animation-jump');
    } else {
        document.getElementById('start-screen').classList.remove('d-none');
    }
}

function showGame() {
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
    gameStarted = false;
    let overlay;
    if (condition === "W") {
        overlay = "win-screen";
    } else {
        overlay = "game-over-screen";
    };
    setTimeout(() => {
        document.getElementById(overlay).classList.remove('d-none');
        intervalIds.forEach(clearInterval);
        intervalIds = [];
    }, 1200);
}

function restartGame() {
    document.getElementById('win-screen').classList.add('d-none');
    document.getElementById('game-over-screen').classList.add('d-none');
}

function getLocalStorage(str) {
    return JSON.parse(localStorage.getItem(str));
}

function setLocalStorage(bool) {
    localStorage.setItem('gameStarted', JSON.stringify(bool));
}