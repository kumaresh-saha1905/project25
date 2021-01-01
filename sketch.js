const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p;
var d;
var paper,ground,side0,side1,side2;

function preload(){
   p=loadImage("dd/paper.png");
   d=loadImage("dd/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
 
   
	engine = Engine.create();
	world = engine.world;
	side0 = new Dustbin(585, 555, 30, 100);
	paper = new Paper(100, 600, 10);
    
	ground = new Ground(400, 680, 800, 20);
 
	
	side1 = new Dustbin(635, 660, 150, 20);
	side2 = new Dustbin(720, 620, 20, 100);


	Engine.run(engine);
 
}


function draw() {

 rectMode(CENTER);
 background("white");

 Engine.update(engine);

 paper.display();
 
 ground.display();

 side0.display();
 

 drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paper.body, paper.body.position, 
		  {x:14, y: -18})
		  
		  side0.display();
		  paper.display();

}
}
