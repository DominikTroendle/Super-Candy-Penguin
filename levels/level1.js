const level1 = new Level(
    [
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Endboss()
    ],
    [
        new BackgroundObject('img/background/l1-background.png', 0, 0),
        new BackgroundObject('img/background/l4-stars.png', 0, 0),
        new Moon('img/background/l6-moon.png', -240, 10),
        new BackgroundObject('img/background/l2-northern-lights01.png', 0, 0),
        new BackgroundObject('img/background/l5-northern-lights02.png', 0, 0),
        
    ],
    [
        new MovingBackgroundObject('img/background/l7-mountains01.png', 0, 0, 0.3),
        new MovingBackgroundObject('img/background/l8-mountains02.png', 0, 0, 0.5),
        new MovingBackgroundObject('img/background/l9-ground.png', 0, 0, 1)
    ]
);