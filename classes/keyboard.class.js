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

    /**
     * Binds keyboard press and button touch events for controlling the character.
     */
    bindKeyPressEvents() {
        this.bindKeydownEvents();
        this.bindKeyupEvents();
    }

    /**
     * Binds keydown events to update character movement and actions.
     */
    bindKeydownEvents() {
        window.addEventListener('keydown', (event) => {
            if (event.key == "ArrowRight" || event.key == "d") this.RIGHT = true;
            if (event.key == "ArrowLeft" || event.key == "a") this.LEFT = true;
            if (event.key == " ") this.SPACE = true;
            if (event.key == "f") this.checkThrowCooldown();
        });
    }

    /**
     * Checks and enforces a cooldown for the throw action.
     */
    checkThrowCooldown() {
        if (!this.THROW_REQUEST_START || new Date().getTime() - this.THROW_REQUEST_START > 750) {
            this.THROW_REQUEST_START = new Date().getTime();
            this.F = true;
        };
    }

    /**
     * Binds keyup events to stop character movement and actions.
     */
    bindKeyupEvents() {
        window.addEventListener('keyup', (event) => {
            if (event.key == "ArrowRight" || event.key == "d") this.RIGHT = false;
            if (event.key == "ArrowLeft" || event.key == "a") this.LEFT = false;
            if (event.key == " ") this.SPACE = false;
        });
    }

    /**
     * Binds button touch events for mobile controls by connecting each control element to its corresponding action key.
     */
    bindButtonPressEvents() {
        Object.entries(this.controls).forEach(([id, key]) => {
            let element = document.getElementById(id);
            this.addTouchstartListener(element, key);
            this.addTouchendListener(element, key);
        });
    }

    /**
     * Adds a touchstart listener to a button element and activates the corresponding control key or triggers the throw cooldown.
     *
     * @param {HTMLElement} element - the button element to bind
     * @param {String} key - the control key to activate (e.g. "RIGHT", "LEFT", "SPACE", "F")
     */
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

    /**
     * Adds a touchend listener to a button element and deactivates the corresponding control key.
     *
     * @param {HTMLElement} element - the button element to bind
     * @param {String} key - the control key to deactivate
     */
    addTouchendListener(element, key) {
        element.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (key !== "F") {
                this[key] = false;
            };
        });
    }
}