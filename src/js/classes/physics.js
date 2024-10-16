export class AABB_COLLISION {
    constructor() {
        this.lastObject;
    }

    isColliding(object1, object2) {
        return object1.vertices[0].x < object2.vertices[2].x &&
        object1.vertices[2].x > object2.vertices[0].x &&
        object1.vertices[0].y < object2.vertices[2].y &&
        object1.vertices[2].y > object2.vertices[0].y;
    }
}