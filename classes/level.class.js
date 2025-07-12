export class Level {
    enemies;
    candys;
    coins;
    hearts;
    staticBackground;
    movingBackground;
    // level_end_x = 3840;
    level_end_x = 4790;

    constructor(enemies, candys, coins, hearts,  staticBackground, movingBackground) {
        this.enemies = enemies;
        this.candys = candys;
        this.coins = coins;
        this.hearts = hearts;
        this.staticBackground = staticBackground;
        this.movingBackground = movingBackground;
    }
}