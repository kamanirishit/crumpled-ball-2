var packageBody,ground,log1,log2,log3,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

	class Log{
constructor(x,y,width,height){
	var is={
		friction:0.6,
		restitution:1.0
	}
	this.body=Bodies.rectangle(x,y,width,height,is);
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	}
display(){
	var pos=this.body.position;
	fill("red");
	rect(pos.x,pos.y,this.width,this.height);
}
	}
	
function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1800, 700);
	ball=new Ball();
	log1=new Log(1100,584,100,20);
log2=new Log(1051,550,20,100);
	log3=new Log(1140,550,20,100);
	dustbin=new Dustbin(1094,535,79,100);
	var option={
		isStatic:true
		}
	ground=Bodies.rectangle(width/2,height-100,width,30,option);
World.add(world,ground);
Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
 
  background("white");
  ball.display();
  log1.display();
  log2.display();
  log3.display();
  dustbin.display();
  console.log(mouseX,mouseY);
  rect(ground.position.x,ground.position.y,width,30);
 stop();
}
function stop(){
	if(keyCode===UP_ARROW){
	Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}

