function startGame() {
    document.getElementById('penguin-animated').classList.remove('penguin-animation-idle');
    document.getElementById('penguin-animated').style.backgroundImage = "url('./img/menu-screens/sprite-sheets/penguin-jump-sprite-sheet.png')";
    document.getElementById('start-screen').style.gap = '11.5px';
    document.getElementById('penguin-animated').classList.add('penguin-animation-jump');
    setTimeout(() => {
        document.getElementById('overlays').classList.add('d-none');
        document.getElementById('penguin-animated').classList.remove('penguin-animation-jump');
    }, 1000);
}