var b1,b2,b3;
var wall
function setup() {
  createCanvas(1600,400);
b1=createSprite(1100,100,30,30);
b2=createSprite(1100,200,30,30);
b3=createSprite(1100,300,30,30);
wall=createSprite(50,200,10,600)
  b1.velocityX=-55;
  b2.velocityX=-90;
  b3.velocityX=-60;
   b1.shapeColor="red";
  b2.shapeColor="yellow";
  b3.shapeColor="green";
}

function draw() {
  background(255,255,255); 
 
  
  if (b1.x-wall.x<(b1.width/2+wall.width/2)){
 zenia.velocityX=0
 zenia.shapeColor="green"
 
  }
  if (tourus.x-wall.x<(tourus.width/2+wall.width/2)){
   tourus.velocityX=0
   tourus.shapeColor="blue"
    
}
 if (cyclap.x-wall.x<(cyclap.width/2+wall.width/2)){
      cyclap.velocityX=0
      cyclap.shapeColor="red"
     
}
  drawSprites();
}
