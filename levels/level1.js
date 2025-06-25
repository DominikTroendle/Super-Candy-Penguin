import { Level } from "../classes/level.class.js";
import { Enemy } from "../classes/enemy.class.js";
import { Endboss } from '../classes/endboss.class.js';
import { Candy } from "../classes/candy.class.js";
import { Coin } from "../classes/coin.class.js";
import { BackgroundObject } from '../classes/background-object.class.js';
import { Moon } from '../classes/moon.class.js';
import { MovingBackgroundObject } from "../classes/moving-background-object.class.js";

export const level1 = new Level(
    [
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Endboss()
    ],
    [
        new Candy(400),
        new Candy(460),
        new Candy(700),
        new Candy(800),
        new Candy(1200),
        new Candy(1450),
        new Candy(1520),
        new Candy(1800),
        new Candy(2000),
        new Candy(2300),
        new Candy(2600),
        new Candy(2700),
        new Candy(3000),
        new Candy(3100),
        new Candy(3400),
        new Candy(3600),
        new Candy(3650),
        new Candy(3700)
    ],
    [
        new Coin(600, 460),
        new Coin(700, 400),
        new Coin(800, 350),
        new Coin(900, 400),
        new Coin(1000, 460)
    ],
    [
        new BackgroundObject('img/background/l1-background.png', 0, 0),
        new BackgroundObject('img/background/l4-stars.png', 0, 0),
        new Moon('img/background/l6-moon.png', -240, 10),
        new BackgroundObject('img/background/l2-northern-lights01.png', 0, 0),
        new BackgroundObject('img/background/l5-northern-lights02.png', 0, 0)
    ],
    [
        new MovingBackgroundObject('img/background/l7-mountains01.png', 0, 0, 0.3),
        new MovingBackgroundObject('img/background/l8-mountains02.png', 0, 0, 0.5),
        new MovingBackgroundObject('img/background/l9-ground.png', 0, 0, 1)
    ]
);