
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

 if(keyIsDown(RIGHT_ARROW)){
   background("red");
   box.x = box.x + 1;
 }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.x = box.x -1;
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   box.y = box.y -1;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.y = box.y +1;
  }


  
  drawSprites();
}

