let gameEnded = false;
let intervalIds = [];

/**
 * Creates a stoppable interval by storing its ID in the global intervalIds array.
 *
 * @param {Function} fn - the callback function to be executed repeatedly
 * @param {Number} time - the interval delay in ms
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

/**
 * Displays the game screen, triggers the start animation and shows mobile controls if the device uses a coarse pointer (touch).
 */
function showGame() {
    let media = window.matchMedia("(pointer: coarse)");
    changeStartAnimation();
    setTimeout(() => {
        resetOverlays();
        if (media.matches) document.getElementById('mobile-controls').classList.remove('d-none');
        document.getElementById('penguin-animated').classList.remove('penguin-animation-jump');
    }, 1000);
}

/**
 * Changes the penguin animation on the start screen from idle to jump if the window is wide enough.
 */
function changeStartAnimation() {
    if (window.innerWidth >= 1280) {
        document.getElementById('penguin-animated').classList.remove('penguin-animation-idle');
        document.getElementById('penguin-animated').style.backgroundImage = "url('./img/menu-screens/sprite-sheets/penguin-jump-sprite-sheet.png')";
        document.getElementById('start-screen').style.gap = '11.5px';
        document.getElementById('penguin-animated').classList.add('penguin-animation-jump');
    };
}

/**
 * Ends the game by showing the corresponding overlay (win or game over), stopping all intervals and displaying collected coins.
 *
 * @param {String} condition - the end condition ("W" = win, "L" = lose)
 * @param {Number} coins - the number of collected coins to display
 */
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

/**
 * Shows the game ending overlay, updates the coin counters and plays the corresponding music.
 *
 * @param {String} overlay - the ID of the overlay element to display
 * @param {HTMLElement} collectedCoinsDisplay - elements displaying collected coins
 * @param {Number} coins - the total number of collected coins
 */
function initializeGameEndingOverlay(overlay, collectedCoinsDisplay, coins) {
    document.getElementById(overlay).classList.remove('d-none');
    collectedCoinsDisplay.forEach(e => e.innerText = coins);
    playWinLoseMusic(overlay);
}

/**
 * Clears all active intervals stored in the intervalIds array and the array itself.
 */
function clearIntervals() {
    intervalIds.forEach(clearInterval);
    intervalIds = [];
}

/**
 * Hides all overlay screens (start, win, game over, controls, settings, imprint, mobile controls).
 */
function resetOverlays() {
    let overlays = ['start-screen', 'win-screen', 'game-over-screen', 'controls', 'settings', 'imprint', 'mobile-controls'];
    overlays.forEach((str) => {
        document.getElementById(str).classList.add('d-none');
    });
}

/**
 * Shows the given overlay by removing its `d-none` class.
 *
 * @param {String} overlay - the ID of the overlay element to display
 */
function showOverlay(overlay) {
    document.getElementById(overlay).classList.remove('d-none');
}