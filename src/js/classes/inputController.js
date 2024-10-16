export class InputController {
    constructor(allowed_keys) {
        this.allowed_keys = allowed_keys;
        this.keys = [];
        this.isPressing = 0;
        this.setup();
    }

    setup() {
        document.addEventListener("keydown", (e) => this.keyDown(e));
        document.addEventListener("keyup", (e) => this.keyUp(e));
    }

    keyDown({ key }) {
        if (this.allowed_keys[key]) {
            this.keys[key] = true;
            this.isPressing++;
        }
    }

    keyUp({ key }) {
        if (this.allowed_keys[key]) {
            this.keys[key] = false;
            this.isPressing--;
        }
    }
}