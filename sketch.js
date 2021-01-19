const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var myEngine,myWorld,ground;
var box1,box2;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld =myEngine.world;

  ground = new Ground(200,390,400,20);
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);


 /*  var render = Render.create({
    element: document.body,
    engine: myEngine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(myEngine);
  Render.run(render); */
  
}

function draw() {
  background(0); 
  Engine.update(myEngine); 

  ground.display();
  box1.display();
  box2.display();
  
  
}