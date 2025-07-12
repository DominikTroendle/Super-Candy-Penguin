import { Level } from "../classes/level.class.js";
import { EnemyBig } from "../classes/enemy-big.class.js";
import { Endboss } from '../classes/endboss.class.js';
import { Candy } from "../classes/candy.class.js";
import { Coin } from "../classes/coin.class.js";
import { Heart } from "../classes/heart.class.js";
import { BackgroundObject } from '../classes/background-object.class.js';
import { Moon } from '../classes/moon.class.js';
import { MovingBackgroundObject } from "../classes/moving-background-object.class.js";
import { EnemySmall } from "../classes/enemy-small.class.js";

export const level1 = new Level(
    [
        new EnemySmall(200),
        new EnemySmall(600),
        new EnemySmall(900),
        new EnemySmall(1200),
        new EnemySmall(1700),
        new EnemySmall(2000),
        new EnemySmall(2300),
        new EnemySmall(2700),
        new EnemySmall(3400),
        new EnemySmall(4000),
        new EnemyBig(640),
        // new EnemyBig(840),
        new EnemyBig(1040),
        new EnemyBig(1240),
        // new EnemyBig(1440),
        new EnemyBig(1640),
        new EnemyBig(1840),
        new EnemyBig(2040),
        new EnemyBig(2240),
        // new EnemyBig(2440),
        new EnemyBig(2640),
        new EnemyBig(2840),
        new EnemyBig(3040),
        new EnemyBig(3240),
        // new EnemyBig(3440),
        new EnemyBig(3640),
        // new EnemyBig(3840),
        new EnemyBig(4040),
        new EnemyBig(4240),
        new EnemyBig(4440),
        // new EnemyBig(4640),
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
        new Coin(1000, 460),
        new Coin(1300, 460),
        new Coin(1600, 460),
        new Coin(1870, 460),
        new Coin(1940, 460),
        new Coin(2010, 460),
        new Coin(2400, 460),
        new Coin(2500, 400),
        new Coin(2600, 350),
        new Coin(2700, 400),
        new Coin(2800, 460),
        new Coin(3200, 460),
        new Coin(3300, 400),
        new Coin(3400, 350),
        new Coin(3500, 400),
        new Coin(3600, 460)
    ],
    [
        new Heart(500, 460)
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