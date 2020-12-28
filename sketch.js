var car;
var wall;
var speed;
var weight;

var deformation;





function setup() {

  createCanvas(1600,400);
  car=createSprite(400, 200, 10, 10);
  car.velocityX=speed;
  car.shapeColour="white";

  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColour= "brown";

  speed=random(55, 90);
  weight=random(400, 1500);


}

function draw() {
  background(255,255,255);  
  if (wall.x-car.x<car.width/2+wall.width/2)
  {
    car.velocityX=0;
    var deformation=0.15*weight*speed*speed/22509;
   if(deformation>180)
   {
    car.shapeColour="red";
   }if(deformation<180 && deformation>100)
  {
car.shapeColour="yellow";
  }
  if(deformation<80){
    car.shapeColour="green";
  }
}
  drawSprites();
}