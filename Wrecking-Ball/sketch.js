const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground();
    box1 = new Box(900, 100);
    box2 = new Box(900, 100);
    box3 = new Box(900, 100);
    box4 = new Box(900, 100);
    box5 = new Box(900, 100);
    box6 = new Box(900, 100);
    box7 = new Box(900, 100);

    box11 = new Box(800, 100);
    box12 = new Box(800, 100);
    box13 = new Box(800, 100);
    box14 = new Box(800, 100);
    box15 = new Box(800, 100);
    box16 = new Box(800, 100);
    
    box21 = new Box(1000, 100);
    box22 = new Box(1000, 100);
    box23 = new Box(1000, 100);
    box24 = new Box(1000, 100);
    box25 = new Box(1000, 100);
    box26 = new Box(1000, 100);
    box27 = new Box(1000, 100);
    box28 = new Box(1000, 100);

    ball = new Ball(550, 400);

    slingshot = new Slingshot(ball.body, {x:680, y:100});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    ball.display();

    slingshot.display();

}

function mouseDragged(){
 Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});   
}

/*function mouseReleased(){
    chain.fly();
}*/