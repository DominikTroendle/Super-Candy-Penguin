class Character extends MovableObject {
    x = -20;
    y = 280;
    width = 547;
    height = 350;
    IMAGES_IDLE = [
            'img/characters/Character02/Idle/All Characters-Character02-Idle_00.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_01.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_02.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_03.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_04.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_05.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_06.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_07.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_08.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_09.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_10.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_11.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_12.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_13.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_14.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_15.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_16.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_17.png',
            'img/characters/Character02/Idle/All Characters-Character02-Idle_18.png'
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('img/characters/Character02/Idle/All Characters-Character02-Idle_00.png');
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 19);
    }

    jump() {

    }
}