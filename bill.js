class Ball{
    constructor(){
        var option={
            restitution:0.0,
            friction: 0.7
        }
   this.body=Bodies.rectangle(200,350,50,50,option);
   this.image=loadImage("paper.png")
   World.add(world,this.body);  
   this.width=50;
   this.height=50 ;
  }
  display(){
      rectMode(CENTER);
            fill("white");
            stroke("black");
            imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  }
  
}