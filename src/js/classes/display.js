export class Display {
    constructor(canvas_data, context, showVertices) {
        this.canvas_data = canvas_data;
        this.context = context;
        this.show_vertices = showVertices;
    }

    Update(objects) {
        this.Clear();
        this.Draw(objects);
    }

    Clear() {
        this.context.clearRect(0, 0, this.canvas_data.width, this.canvas_data.height);
    }

    Draw(objects) {
        objects.forEach((object) => {
            let all_vertices = [];

            this.context.beginPath();
            this.context.moveTo(object.vertices[0].x, object.vertices[0].y);
            this.context.strokeStyle = object.isColliding ? "yellow" : "black";

            for(let i = 0; i < object.vertices.length; i++) {
                this.context.lineTo(object.vertices[i].x, object.vertices[i].y);
                if (this.show_vertices) {
                    all_vertices.push(object.vertices[i]);
                }
            }

            this.context.closePath();
            this.context.stroke();

            if (this.show_vertices) {
                for(let i = 0; i < all_vertices.length; i++) {
                    this.context.beginPath();
                    this.context.strokeStyle = "black";
                    this.context.fillStyle = "red";
                    this.context.arc(all_vertices[i].x, all_vertices[i].y, 4, 0, Math.PI * 2);
                    this.context.stroke();
                    this.context.fill();
                    this.context.closePath();
                }
            }
        });
    }
}