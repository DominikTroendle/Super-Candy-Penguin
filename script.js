let gameEnded = false;
let intervalIds = [];
let soundControls = Array.from(document.querySelectorAll('.sound-control'));
let musicVolume = 0.5;
let soundVolume = 0.5;

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function showGame() {
    changeStartAnimation();
    setTimeout(() => {
        resetOverlays();
        document.getElementById('penguin-animated').classList.remove('penguin-animation-jump');
    }, 1000);
}

function changeStartAnimation() {
    document.getElementById('penguin-animated').classList.remove('penguin-animation-idle');
    document.getElementById('penguin-animated').style.backgroundImage = "url('./img/menu-screens/sprite-sheets/penguin-jump-sprite-sheet.png')";
    document.getElementById('start-screen').style.gap = '11.5px';
    document.getElementById('penguin-animated').classList.add('penguin-animation-jump');
}

function endGame(condition) {
    let overlay;
    if (gameEnded) return;
    gameEnded = true;
    condition === "W" ? overlay = "win-screen" : overlay = "game-over-screen";
    setTimeout(() => {
        document.getElementById(overlay).classList.remove('d-none');
        intervalIds.forEach(clearInterval);
        intervalIds = [];
    }, 1200);
}

function resetOverlays() {
    let overlays = ['start-screen', 'win-screen', 'game-over-screen', 'controls', 'settings'];
    overlays.forEach((str) => {
        document.getElementById(str).classList.add('d-none');
    });
}

function showOverlay(overlay) {
    document.getElementById(overlay).classList.remove('d-none');
}

soundControls.forEach(e => e.addEventListener('click', () => {
    changeVolume(e.id);
}));

function changeVolume(id) {
    if (id === "sound-down" && soundVolume != 0) {
        soundVolume -= 0.1;
    } else if (id === "sound-up" && soundVolume != 0.5) {
        soundVolume += 0.1;
    } else if (id === "sound-mute") {
        soundVolume = 0;
    } else if (id === "music-down" && musicVolume != 0) {
        musicVolume -= 0.1;
    } else if (id === "music-up" && musicVolume != 0.5) {
        musicVolume += 0.1;
    } else if (id === "music-mute") {
        musicVolume = 0;  
    };
    soundVolume = Math.round(soundVolume * 10) / 10;
}