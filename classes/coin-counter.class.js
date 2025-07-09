import { Counter } from "./counter.class.js";

export class CoinCounter extends Counter {
    x = 42;
    y = 145;
    width = 44;
    height = 44;
    currentAmount = 0;

    constructor () {
        super().loadImage('img/counter-icons/Gold_1.png');
    }
}