"use strict";
const canvas_data = {
    width: window.innerWidth,
    height: window.innerHeight
};
const canvas = document.querySelector("#display");
const context = canvas.getContext('2d');
const objects = [];

import { Display } from "./classes/display.js";
import { Polygon } from "./classes/polygon.js";
import { FramesUpdate, FramesPerSecond } from "./classes/frames.js";
import { Vector2 } from "./classes/vector.js";
import { AABB_COLLISION } from "./classes/physics.js";
import { InputController } from "./classes/inputController.js";

canvas.width = canvas_data.width;
canvas.height = canvas_data.height;

const Square1 = new Polygon([new Vector2(0, 0), new Vector2(50, 0), new Vector2(50, 50), new Vector2(0, 50)], new Vector2(40, 30));
const Square2 = new Polygon([new Vector2(0, 0), new Vector2(70, 0), new Vector2(70, 150), new Vector2(0, 150)], new Vector2(800, 100));
const Square3 = new Polygon([new Vector2(0, 0), new Vector2(100, 0), new Vector2(100, 100), new Vector2(0, 100)], new Vector2(400, 300));
objects.push(Square1);
objects.push(Square2);
objects.push(Square3);

window.addEventListener("load", () => {
    const display = new Display(canvas_data, context, true);
    const world = new AABB_COLLISION();
    const input = new InputController({ w: true, s: true, d: true, a: true });
    const update_display_time = new FramesUpdate(32);
    const frames_per_pecond = new FramesPerSecond();

    function Loop(time) {
        requestAnimationFrame(Loop);

        if (input.isPressing) {
            const x = (input.keys["a"] ? -1 : 0) + (input.keys["d"] ? 1 : 0);
            const y = (input.keys["w"] ? -1 : 0) + (input.keys["s"] ? 1 : 0);
            Square1.setPosition(new Vector2(x, y));
        }

        if (update_display_time.CanBeUpdated(time)) {
            display.Update(objects);
            frames_per_pecond.Update(time);
            frames_per_pecond.Drawn(display, new Vector2(25, 50));

            if (world.isColliding(Square1, Square3) || world.isColliding(Square1, Square2)) {
                Square1.isColliding = true;
            } else {
                Square1.isColliding = false;
            }
        }
    }
    Loop();
});