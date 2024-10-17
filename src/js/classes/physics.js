export class AABB_COLLISION {
    constructor() {
        this.lastObject;
    }

    isColliding(object, objects) {
        for (let i = 0; i < objects.length; i++) {
            let _result;
            const _object = objects[i];
            _result = object.vertices[0].x < _object.vertices[2].x &&
            object.vertices[2].x > _object.vertices[0].x &&
            object.vertices[0].y < _object.vertices[2].y &&
            object.vertices[2].y > _object.vertices[0].y;

            if (_result) {
                return true;
            }
        }

        return false;
    }
}