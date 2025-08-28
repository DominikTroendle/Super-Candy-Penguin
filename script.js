let gameEnded = false;
let intervalIds = [];

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function showGame() {
    let media = window.matchMedia("(pointer: coarse)")
    changeStartAnimation();
    setTimeout(() => {
        resetOverlays();
        if (media.matches) document.getElementById('mobile-controls').classList.remove('d-none');
        document.getElementById('penguin-animated').classList.remove('penguin-animation-jump');
    }, 1000);
}

function changeStartAnimation() {
    if (window.innerWidth >= 1280) {
        document.getElementById('penguin-animated').classList.remove('penguin-animation-idle');
        document.getElementById('penguin-animated').style.backgroundImage = "url('./img/menu-screens/sprite-sheets/penguin-jump-sprite-sheet.png')";
        document.getElementById('start-screen').style.gap = '11.5px';
        document.getElementById('penguin-animated').classList.add('penguin-animation-jump');
    };
}

function endGame(condition, coins) {
    let overlay;
    let collectedCoinsDisplay = Array.from(document.querySelectorAll('.collected-coins'));
    if (gameEnded) return;
    gameEnded = true;
    condition === "W" ? overlay = "win-screen" : overlay = "game-over-screen";
    resetOverlays();
    setTimeout(() => {
        initializeGameEndingOverlay(overlay, collectedCoinsDisplay, coins);
        clearIntervals();
    }, 1200);
}

function initializeGameEndingOverlay(overlay, collectedCoinsDisplay, coins) {
    document.getElementById(overlay).classList.remove('d-none');
    collectedCoinsDisplay.forEach(e => e.innerText = coins);
    playWinLoseMusic(overlay);
}

function clearIntervals() {
    intervalIds.forEach(clearInterval);
    intervalIds = [];
}

function resetOverlays() {
    let overlays = ['start-screen', 'win-screen', 'game-over-screen', 'controls', 'settings', 'mobile-controls'];
    overlays.forEach((str) => {
        document.getElementById(str).classList.add('d-none');
    });
}

function showOverlay(overlay) {
    document.getElementById(overlay).classList.remove('d-none');
}