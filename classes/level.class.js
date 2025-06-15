class Level {
    enemies;
    candys;
    staticBackground;
    movingBackground;
    level_end_x = 3840;

    constructor(enemies, candys, staticBackground, movingBackground) {
        this.enemies = enemies;
        this.candys = candys;
        this.staticBackground = staticBackground;
        this.movingBackground = movingBackground;
    }
}