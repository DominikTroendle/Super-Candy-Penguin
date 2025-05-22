class StaticBackgroundObject extends StaticBackground {
    x = 0;
    y = 0;

    constructor(imagePath) {
        super().loadImage(imagePath);
    }
}