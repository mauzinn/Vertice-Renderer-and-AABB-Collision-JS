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