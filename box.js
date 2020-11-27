class Box {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8
        }

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        console.log(this.body);
    }
    display() {
        var angle = this.body.angle;
        push();
        rectMode(CENTER)
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }

}