function startGame() {
    document.getElementById('penguin-animated').classList.remove('penguin-animation-idle');
    document.getElementById('penguin-animated').classList.remove('penguin-animation-jump');
    setTimeout(() => {
        document.getElementById('overlays').classList.add('d-none');
        document.getElementById('penguin-animated').classList.remove('penguin-animation-jump');
    }, 1000);
}