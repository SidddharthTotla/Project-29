const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
 
  //createSprite(400, 200, 50, 50);
 polygon = new Polygon(50,10,20,20);
 
 slingshot  = new Slingshot(polygon.body,{x:80,y:155});

 ground1 = new Ground(390,255,200,20);
 ground2 = new Ground(530,135,200,20);

 block1 = new Box(330,235,30,40);
 block2 = new Box(360,235,30,40);
 block3 = new Box(390,235,30,40);
 block4 = new Box(420,235,30,40);
 block5 = new Box(450,235,30,40);

 block6 = new Box(360,195,30,40);
 block7 = new Box(390,195,30,40);
 block8 = new Box(420,195,30,40);

 block9 = new Box(390,155,30,40);

 block10 = new Box(470,115,30,40);
 block11 = new Box(500,115,30,40);
 block12 = new Box(530,115,30,40);
 block13 = new Box(560,115,30,40);
 block14 = new Box(590,115,30,40);

 block15 = new Box(500,75,30,40);
 block16 = new Box(530,75,30,40);
 block17 = new Box(560,75,30,40);

 block18 = new Box(530,35,30,40);
}

function draw() {
  Engine.update(engine);
  background(155,0,200); 
  polygon.display(); 
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

 // drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body);
  }
}