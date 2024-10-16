export class Polygon {
    constructor(vertices, position) {
        this.vertices = vertices;
        this.lastPosition;
        this.position = position;
        this.isColliding=  false;
        this.setPosition(position);
    }

    setPosition(position) {
        for(let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].x += position.x;
            this.vertices[i].y += position.y;
            this.lastPosition = this.position;
            this.position = this.vertices[i];
        }
    }
}