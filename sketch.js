
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var paper1,log1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,640,40);
	ground=new Ground(400,680,800,10)
	log1= new Log(300,620,5,100)
	log2=new Log(550,620,5,100)
	log3=new Log(425,665,240,5)
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display();
  ground.display()
  log1.display()
  log2.display()
  log3.display()



  keyPressed(paper)
  drawSprites();
 
}

function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



