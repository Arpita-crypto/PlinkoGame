const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //Make the plinkos
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,100));
  }

  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,200));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,300));
  }

  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,400));
  }

//Making the divisions
  for(var i = 0; i <= width; i = i + 80){
    divisions.push (new Division(i, height - divisionHeight/2, 10, divisionHeight));
  }

  //creating ground
  ground = new Ground(240,795,width,10);

  particles.push(new Particle(random(width/2-10,width/2 + 10),10,10));

  
}

function draw() {
  background(0);
  drawSprites();
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //text("x:"+mouseX+ " y:"+mouseY,200,200); 
  fill(255);
  Engine.update(engine);

  ground.display();

//showing the plinkos
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
   }

  //showing the divisions
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  //showing the particles
  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }



    if (frameCount%60 === 0) {
      particles.push(new Particle(random(width/2-10,width/2 + 10),10,10));
    } 
}