var zenia,tourus,cyclap;
var wall
function setup() {
  createCanvas(1600,400);
zenia=createSprite(1100,100,30,30);
tourus=createSprite(1100,200,30,30);
cyclap=createSprite(1100,300,30,30);
wall=createSprite(50,200,10,600)
}

function draw() {
  background(255,255,255); 
  zenia.shapeColor="red";
  tourus.shapeColor="yellow";
  cyclap.shapeColor="green";
  zenia.velocityX=-55;
  tourus.velocityX=-90;
  cyclap.velocityX=-60;
  
  if (zenia.x-wall.x<(zenia.width/2+wall.width/2)){
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