class Level {
    enemies;
    staticBackground;
    movingBackground;
    level_end_x = 3840;

    constructor(enemies, staticBackground, movingBackground) {
        this.enemies = enemies;
        this.staticBackground = staticBackground;
        this.movingBackground = movingBackground;
    }
}