import { Counter } from "./counter.class.js";

export class CoinCounter extends Counter {
    x = 41;
    y = 150;
    width = 46;
    height = 46;
    currentAmount = 0;

    constructor () {
        super().loadImage('img/collectibles/coin/Gold_1.png');
    }
}