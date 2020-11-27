const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200, 390, 400, 20);
    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(240, 100, 50, 100);

    // var ball_options = {
    //     restitution: 1.0
    // }

    // ball = Bodies.circle(200, 100, 20, ball_options);
    // World.add(world, ball);

}

function draw() {
    background("lightblue");
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();

    // ellipseMode(RADIUS);
    // ellipse(ball.position.x, ball.position.y, 20, 20);
}