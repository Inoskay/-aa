var box;



function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
box.shapeColor= "gray"
}



function draw() 
{
if(keyIsDown(RIGHT_ARROW)){
  background("red")
}
  background(30);

  drawSprites();
  
  
}




