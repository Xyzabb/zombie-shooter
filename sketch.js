var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var h1,h2,h3;
var shooter_deadImg;
var bullet;
var x,y;
var zombieGroup,bulletGroup;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  shooter_deadImg = loadImage("assets/shooter_1.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImg = loadImage("assets/zombie.png")

  h1 = loadImage("assets/heart_1.png")
  h2 = loadImage("assets/heart_2.png")
  h3 = loadImage("assets/heart_3.png")
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

 heart = createSprite(displayWidth-1200,displayHeight-700,20,20);
 heart.addImage(h3);
 heart.scale = 0.2;

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   
 zombieGroup = createGroup();
 bulletGroup = createGroup();

 

}

function draw() {
  background(0); 

 x = player.position.x;
 y = player.position.y;


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)


bullet = createSprite(x,y,50,50);
  bullet.velocityX = 9;
 // bullet.visible = false;
 bulletGroup.add(bullet);

// detectCollision();

if(zombieGroup.collide(bulletGroup)){
 
  zombieGroup.destroyEach();
  zombie.visible = false;
  //bulletGroup.collide(zombieGroup);  
}

}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(player.collide(zombie)){
  heart.addImage(h2);

}



//bulletSpawner();

zombieSpawner();

drawSprites();

}

function zombieSpawner(){
  if(frameCount%90 ===0){
    zombie = createSprite(displayWidth-100,random(160,710),50,50);
    zombie.velocityX = -3;
    zombie.addImage(zombieImg);
    zombie.scale = 0.15;
    zombieGroup.add(zombie);
    zombie.debug = true
    zombie.setCollider("rectangle",0,0,700,700)
    
  }
 
  


}

function detectCollision(){
 
  


}

function bulletSpawner(){

 


}
