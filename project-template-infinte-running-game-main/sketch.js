var space,rocket,astorid;
var spaceImg,rocketImg1;
var astoridImg,astoridCG;

var gameOverImg;

var END =0;
var PLAY =1;
var gameState = PLAY;
var gameState = END

var distance =0;
var gameOver, restart;

function preload(){

  spaceImg = loadImage("space.png");
  rocketImg1 = loadImage("rocket");

  astoridImg = loadImage("astorid.png");
  gameOverImg = loadImage("gameOver.png");
}

function setup(){
  
createCanvas(windowWidth, windowHeight);

// Moving background
space=createSprite(width/200);
space.addImage(spaceImg);
space.velocityX = -4;

//creating boy running
rocket = createSprite(220,220);
rocket.scale=0.07;
rocket.addImage(rocketImg1);

//set collider for mainCyclist

//mainCyclist.setCollission("rectangle",0,0,40,40);
rocket.setCollider("rectangle",0,0,40,40);
//mainCyclist.setCollission("rectangle",0,0,40,40,50);
//mainCyclist.setCollider("rectangle",0,0,40,40,50);

  
gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
  
astoridCG = new Group();
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  
  if(gameState===PLAY){
  
   distance = distance + Math.round(getFrameRate()/50);
   space.velocityX = -(6 + 2*distance/150);

   edges= createEdgeSprites();

  //code to reset the background
  if(space.x > 0 ){
    space.x = width/2,200;
  }
  
  if(keyDown("SPACE")){
  
    rocket.rocketY = -10;
 // write a code to move up when space arrow is pressed
}

rocket.velocityY = rocket.velocityY + 0.8;

  //creating continous opponent players
  var select_oppPlayer = Math.round(random(1,1));
  
  if (World.frameCount % 150 == 0) {
    if (select_oppPlayer == 1) {
      astorid();
    } 
  }
  
   if(rocket.isTouching(edges)){
     gameState = END;
     rocket.velocityY = 0;
    }
    
    if(rocket.isTouching(astorid)){
      gameState = END;
      rocket.velocityY = 0;
     }
     
}else if (gameState === END) {
    gameOver.visible = true;
  
    textSize(20);
    fill(255);
    text("Press Up Arrow to Restart the game!", 500,200);
  
    space.velocityX = 0;
    rocket.velocityY = 0;
  
  astoridCG.setVelocityXEach(0);
  astoridCG.setLifetimeEach(-1);
  
    // if(keyDown("UP_ARROW")) {
    //   reset;
    // }

    // if(key("UP_ARROW")) {
    //   reset();
    // }

    //if(keyDown()) {
    //   reset();
    // }

if(keyDown("UP_ARROW")) {
  reset();
}
}
}

function astorid(){
        astorid =createSprite(1100,Math.round(random(1150, 1250)));
        astorid.scale =0.06;
        astorid.velocityX = -(6 + 2*distance/150);
        astoridCG.add(astorid);
        astorid.setLifetime=1170;
}

//function reset{
//  gameState = END;
//  gameOver.visible = false;
//  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroyEach();
//  yellowCG.destroyEach();
//  redCG.destroyEach();
  
//  distance = 0;
// }

//function reset{
  //gameState = PLAY;
  //gameOver.visible = true;
  //mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
 //pinkCG.destroy();
  //yellowCG.destroy();
  //redCG.destroy();
  
  //distance = 0;
//}

function reset(){
gameState = PLAY;
gameOver.visible = false;
rocket = loadImage("rocket-ship.webp");
  
astoridCG.destroyEach();

 distance = 0;
 }

//function reset(){
//  gameState = END;
//  gameOver.visible = true;
//  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroyEach();
//  yellowCG.destroyEach();
//  redCG.destroyEach();
  
//  distance = 50;
// }

