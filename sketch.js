var trex;
var iGround;

function setup(){
  canvas=createCanvas(windowWidth,windowHeight);
  
  trex = createSprite(windowWidth/2,windowHeight/2+200,20,20);
  trex.velocityX = 10;

  o1 = createSprite(500,550,10,10);
  o2 = createSprite(8000,550,10,10);
  o3 = createSprite(2000,550,10,10);
  o4 = createSprite(5000,550,10,10);
  o5 = createSprite(10000,550,10,10);
  o6 = createSprite(1500,550,10,10);

  iGround = createSprite(windowWidth/2,windowHeight/2+250,100000000000,10);
  
  
}

function draw(){
  background("black");
  edges = createEdgeSprites();
  trex.collide(iGround);

  camera.position.x = trex.x;

  iGround.visible=false;

  if(trex.x-o1.x>650){
    o1.x = trex.x+650
  }

  if(trex.x-o2.x>650){
    o2.x = trex.x+650
  }

  if(trex.x-o3.x>650){
    o3.x = trex.x+650
  }

  if(trex.x-o4.x>650){
    o4.x = trex.x+650
  }

  if(trex.x-o5.x>650){
    o5.x = trex.x+650
  }

  if(trex.x-o6.x>650){
    o6.x = trex.x+650
  }

  if(keyDown("space")&& trex.y>500){
    trex.velocityY=-12;
  }
  trex.velocityY=trex.velocityY+0.8;

  if(trex.isTouching(o1)||trex.isTouching(o2)||trex.isTouching(o3)||trex.isTouching(o4)||trex.isTouching(o5)||trex.isTouching(o6)){
    textSize(50);
    text("Game Over!",windowWidth/2+700,windowHeight/2);
    trex.velocityX=0;
    trex.velocityY=0;
    
  }
  


  drawSprites();
}
