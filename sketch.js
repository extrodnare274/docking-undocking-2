var iss
var HasDocked
var spacecraft

function preload(){
iss = loadImage('Docking-undocking/iss.png')
spacebg = loadImage('Docking-undocking/spacebg.jpg')
spacecraft1 = loadAnimation('Docking-undocking/spacecraft1.png')
spacecraft2 = loadAnimation('Docking-undocking/spacecraft2.png')
spacecraft3 = loadAnimation('Docking-undocking/spacecraft3.png')
spacecraft4 = loadAnimation('Docking-undocking/spacecraft4.png')
}
function setup() {
  createCanvas(800,400);

  issthing = createSprite(400,200,400,200)
  issthing.addImage(iss)
  issthing.scale = 0.2


  spacecraft = createSprite(500,300,600,500)
  spacecraft.addAnimation(spacecraft1)
  spacecraft.scale = 0.2

}

function draw() {
  background(spacebg);  
  drawSprites();

  if(!hasDocked){
    spacecraft.x = 100
  }

  if (keyIsDown(RIGHT_ARROW)&& player.index !=null) {
    player.distance -=10
  }

  if (keyIsDown(LEFT_ARROW)&& player.index !=null) {
    player.distance +=10
  }

  if((spacecraft)IsTouching(issthing))
  Text("Docking is successful") {
}
}
