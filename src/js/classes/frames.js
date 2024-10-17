export class FramesUpdate {
    constructor(fps) {
        this.interval = 1000 / fps;
        this.lastTime = 0;
    }

    CanBeUpdated(current) {
        if (current - this.lastTime >= this.interval) {
            this.lastTime = current;
            return true;
        }
        
        return false;
    }
}

export class FramesPerSecond {
    constructor() {
        this.fps = 0;
        this.lastTime = 0;
    }

    Update(time) {
        this.fps = 1000 / (time - this.lastTime);
        this.lastTime = time;
    }

    Get() {
        return this.fps;
    }
    
    Drawn(display, position) {
        display.DrawnText(Math.floor(this.fps), position, 50);
    }
}