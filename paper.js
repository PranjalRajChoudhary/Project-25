class Paper{
   constructor(x,y){
       var options = {
           isStatic : false,
           restitution:0.3,
           friction:0,
           density:1.2
       }
       this.body = Bodies.circle(x,y,20,options);
       this.paperimage = loadImage("paper.png");
       World.add(world,this.body);
   }
   display(){
       push();
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       imageMode(RADIUS);
       image(this.paperimage,0,0,30,30);
       pop();
   }
}
