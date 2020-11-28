var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  
  text("When touching: "+(movingRect.width/2+fixedRect.width/2), 50,50);
  text("At any position: "+(movingRect.x-fixedRect.x), 50, 70);

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="white";
    fixedRect.shapeColor="white";
  }

  drawSprites();
}