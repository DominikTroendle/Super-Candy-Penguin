class Candy extends GroundObject {
    y = 510;
    width = 100;
    height = 63;
    lastCandyPosition;
    IMAGES = [
        'img/candy/candy_ground.png',
        'img/candy/candy_ground-mirrored.png'
    ];

    constructor(x) {
        super().loadRandomImg(this.IMAGES);
        this.x = x;
    }
}