var backgroundImage;
var ombie, ombieImage;
var knife, knifeImage;


function preload(){
 backgroundImage = loadImage("background.jpg");
 ombieImage = loadImage("ombie.png");
 knifeImage = loadImage("knife.png");
}

function setup(){
  createCanvas(1500,700);
  
  knife = createSprite(200,200);
  knife.addImage("knife",knifeImage)
  knife.scale = 0.5

 
 
}
function draw(){
  background(backgroundImage);
  knife.x = mouseX;
  knife.y = mouseY;
 
  
drawSprites()
}
