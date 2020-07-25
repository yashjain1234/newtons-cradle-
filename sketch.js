
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 50;
var startPositionX,startPositionY;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400,50,700,20);
//	startPositionX = width/2;
//	startPositionY = height/4;
	bob1 = new Bob(120,350,100);
	bob2 = new Bob(250,350,100);
	bob3 = new Bob(380,350,100);
	bob4 = new Bob(520,350,100);
	bob5 = new Bob(650,350,100);
	rope1 = new Rope(roof.body,bob3.body,0,0);
	rope2 = new Rope(roof.body,bob1.body,-10,0);
	rope3 = new Rope(roof.body,bob2.body,-5,0);
	rope4 = new Rope(roof.body,bob4.body,5,0);
	rope5 = new Rope(roof.body,bob5.body,10,0);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



