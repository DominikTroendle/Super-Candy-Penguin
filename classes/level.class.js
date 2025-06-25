export class Level {
    enemies;
    candys;
    coins;
    staticBackground;
    movingBackground;
    level_end_x = 3840;

    constructor(enemies, candys, coins, staticBackground, movingBackground) {
        this.enemies = enemies;
        this.candys = candys;
        this.coins = coins;
        this.staticBackground = staticBackground;
        this.movingBackground = movingBackground;
    }
}