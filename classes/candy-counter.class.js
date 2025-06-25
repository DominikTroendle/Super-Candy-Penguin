import { Counter } from "./counter.class.js";

export class CandyCounter extends Counter {
    x = 38;
    y = 87;
    width = 52;
    height = 52;
    currentAmount = 0;

    constructor () {
        super().loadImage('img/candy/candy.png');
    }
}