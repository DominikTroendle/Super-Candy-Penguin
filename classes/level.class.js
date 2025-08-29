export class Level {
    enemies;
    candys;
    coins;
    hearts;
    staticBackground;
    movingBackground;
    level_end_x = 4775;

    constructor(enemies, candys, coins, hearts,  staticBackground, movingBackground) {
        this.enemies = enemies;
        this.candys = candys;
        this.coins = coins;
        this.hearts = hearts;
        this.staticBackground = staticBackground;
        this.movingBackground = movingBackground;
    }

    /**
     * Removes the given enemy from the enemies list if it exists.
     *
     * @param {Object} enemy - the enemy instance to remove
     */
    removeEnemy(enemy) {
        let index = this.enemies.indexOf(enemy);
        if (index > -1) {
            this.enemies.splice(index, 1);
        };
    }
}