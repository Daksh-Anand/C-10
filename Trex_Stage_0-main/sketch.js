
var trex ,trex_running, edges;
var ground,invisibleGround,groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite (50,160,60,20);
 trex.addAnimation("running",trex_running);
 edges = createEdgeSprites();

 trex.scale = 0.5;
 trex.x = 50;

 ground = createSprite (200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x = ground.width/2;
}

function draw(){
  background("white")
  
  ground.velocityX = -2
  console.log(ground.x);
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  console.log(trex.y);
  if (keyDown("space")){
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);
  drawSprites();
}
