class Box{
    constructor(x1,y1,w1,h1){
        var options={
            restitution:1,
            density:1.2,
            friction:1.0
        }
        this.body = Bodies.rectangle(x1,y1,w1,h1,options);
        this.width = w1;
        this.height = h1;
        World.add(myWorld,this.body);
    }

    display(){
        var pos  =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height)
        pop();

    }
}