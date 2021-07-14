var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5 
var roof, rope

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);

	bobObject1 = new Bob(250,300);
	bobObject2 = new Bob(300,300);
	bobObject3 = new Bob(350,300);
	bobObject4 = new Bob(400,300);
	bobObject5 = new Bob(450,300);

	rope1 = new rope(bobObject1.body, roof.body, -95, 0)
	rope2 = new rope(bobObject2.body, roof.body, -50, 0)
	rope3 = new rope(bobObject3.body, roof.body, 0, 0)
	rope4 = new rope(bobObject4.body, roof.body, +50, 0)
	rope5 = new rope(bobObject5.body, roof.body, +95, 0)

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyDown === UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-700,y:0});
	}
	
	}



	


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



