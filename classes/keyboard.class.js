export class Keyboard {
    controls = {
        'walk-left': 'LEFT',
        'walk-right': 'RIGHT',
        'jump': 'SPACE',
        'throw': 'F'
    };
    LEFT = false;
    RIGHT = false;
    SPACE = false;
    F = false;

    THROW_REQUEST_STOP = new Date().getTime();
    THROW_REQUEST_START = 0;

    constructor() {
        this.bindKeyPressEvents();
        this.bindButtonPressEvents();
    }

    bindKeyPressEvents() {
        this.bindKeydownEvents();
        this.bindKeyupEvents();
    }

    bindKeydownEvents() {
        window.addEventListener('keydown', (event) => {
            if (event.key == "ArrowRight" || event.key == "d") this.RIGHT = true;
            if (event.key == "ArrowLeft" || event.key == "a") this.LEFT = true;
            if (event.key == " ") this.SPACE = true;
            if (event.key == "f") this.checkThrowCooldown();
        });
    }

    checkThrowCooldown() {
        if (!this.THROW_REQUEST_START || new Date().getTime() - this.THROW_REQUEST_START > 750) {
            this.THROW_REQUEST_START = new Date().getTime();
            this.F = true;
        };
    }

    bindKeyupEvents() {
        window.addEventListener('keyup', (event) => {
            if (event.key == "ArrowRight" || event.key == "d") this.RIGHT = false;
            if (event.key == "ArrowLeft" || event.key == "a") this.LEFT = false;
            if (event.key == " ") this.SPACE = false;
        });
    }

    bindButtonPressEvents() {
        Object.entries(this.controls).forEach(([id, key]) => {
            let element = document.getElementById(id);
            this.addTouchstartListener(element, key);
            this.addTouchendListener(element, key);
        });
    }

    addTouchstartListener(element, key) {
        element.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (key === "F") {
                this.checkThrowCooldown();
            } else {
                this[key] = true;
            };
        });
    }

    addTouchendListener(element, key) {
        element.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (key !== "F") {
                this[key] = false;
            };
        });
    }
}