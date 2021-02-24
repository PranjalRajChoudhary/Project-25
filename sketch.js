
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var world;
var paper;


function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100,495);
	groundObject=new ground(width/2,640,width,20);
	dustbinObj=new dustbin(1200,610);
	
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1350,
		  height: 650,
		  wireframes: false
		}
	  });
  

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  background(230);
 
  Engine.update(engine);

  paper.display();
  groundObject.display();
  dustbinObj.display();
  

  keyPressed();

}
function keyPressed(){
	if(keyDown("up")){
		Body.applyForce(paper.body,paper.body.position,{x:15.8,y:-20});
	}
}
