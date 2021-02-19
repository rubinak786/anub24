const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var box1,box2,box3,box4,box5
var pig1,pig2
var log1,log2,log3,log4
var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    log1 = new log(810,260,300,300,PI/2)
    pig1= new Pig(810,350)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    pig1.display();
}