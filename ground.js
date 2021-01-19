class Ground {
    constructor(x,y,w,h){
        var options={
            isStatic:true
          }
        
          this.myGround = Bodies.rectangle(x,y,w,h,options);
          this.width = w;
          this.height = h;
          World.add(myWorld,this.myGround);
          
         
    }

    display(){
        var ground = this.myGround.position;
        rectMode(CENTER);
        fill(255);
        rect(ground.x,ground.y,this.width,this.height)
      }
}
