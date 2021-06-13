const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,
block12,block13,block14,block15,block16;

var sling;

var polygon;

var stand;

function setup(){

createCanvas(900, 600);

engine = Engine.create();
world = engine.world;

stand = new Ground(550,400,250,20);

block1 = new Block(550,380,30,30);
block2 = new Block(545,380,30,30);
block3 = new Block(540,380,30,30);
block4 = new Block(555,380,30,30);
block5 = new Block(560,380,30,30);
block6 = new Block(565,380,30,30);
block17 = new Block(570,380,30,30);
block7 = new Block(555,360,30,30);
block8 = new Block(550,360,30,30);
block9 = new Block(545,360,30,30);
block10 = new Block(540,360,30,30);
block11 = new Block(535,360,30,30);
block12 = new Block(550,340,30,30);
block13 = new Block(555,340,30,30);
block14 = new Block(560,340,30,30);
block15 = new Block(565,340,30,30);
block16 = new Block(570,380,30,30);



polygon = new Polygon(100,350,30);

sling = new Sling(polygon.body,{x:200,y:300});

Engine.run(engine);

}

function draw(){
background(230);

stand.display();
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
polygon.display();
sling.display();
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }


  function mouseReleased(){
    sling.fly();
}
