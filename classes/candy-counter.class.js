import { Counter } from "./counter.class.js";

export class CandyCounter extends Counter {
    x = 41;
    y = 87;
    width = 46;
    height = 46;
    currentAmount = 0;

    constructor () {
        super().loadImage('img/counter-icons/candy_small.png');
    }
}