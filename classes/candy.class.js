class Candy extends GroundObject {
    y = 510;
    width = 100;
    height = 63;
    IMAGES_CANDY = [
        'img/candy/candy_ground.png',
        'img/candy/candy_ground-mirrored.png'
    ];

    constructor(x) {
        super().loadRandomImg(this.IMAGES_CANDY);
        this.x = x;
    }
}