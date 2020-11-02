var movingrect,fixedrect

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400,200,50,50)
  fixedrect=createSprite(200,200,70,70)
movingrect.shapeColor="pink"
fixedrect.shapeColor="pink"
}

function draw() {
  background(0); 
  console.log(movingrect.x-fixedrect.x)
  movingrect.y=mouseY;
  movingrect.x=mouseX;
  if(movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2&&
    movingrect.y-fixedrect.y<=fixedrect.height/2+movingrect.height/2&&
    fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="yellow"
fixedrect.shapeColor="yellow"
  }
  else{
    movingrect.shapeColor="pink"
fixedrect.shapeColor="pink"
  }
  drawSprites();
}