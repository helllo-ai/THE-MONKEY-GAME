
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var  obstacleGroup
var ground,bananaGroup,groundimage
var survival=0
var bananascore=0
var winner

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png")
  
 
}
 


function setup() {
  createCanvas(600,400)
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1
  
   ground = createSprite(400,350,800,10);
  ground.velocityX=-4
  ground.x = ground.width /2;

  obstacleGroup = createGroup();
 bananaGroup = createGroup();
}


function draw() {
  background(280);
  stroke("black");
  textSize(20);
  fill("black");
  survival=Math.ceil(frameCount/frameRate() )
  text("SURVIVAL Time:"+survival,100,50);
 
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  text ("BANANA SCORE:"+bananascore,100,70)
  if (monkey.isTouching(bananaGroup)){
    bananascore=bananascore+1
    bananaGroup.destroyEach();
    
    
  }
 if (monkey.isTouching(obstacleGroup)){
   bananascore=bananascore-1
    obstacleGroup.destroyEach();
 }
  
 text("REACH BANANSCORE TO 5",100,20)
  
  
drawSprites ();
  
  
  food();
  obstacles ();
if (bananascore===5){
   var anything=createSprite(300,200,600,400)
   textSize("40")
   fill("pink")
   text("YOU ARE THE WINNER",100,200)
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    
   
 }
}


function food (){
  if (frameCount % 80===0){
    banana=createSprite(200,210,20,20)
     banana.y = Math.round(random(120,200));
    banana.addImage( bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
     banana.lifetime=200;
    bananaGroup.add(banana);
  
  
  
  

}

}


function obstacles (){
  if (frameCount % 300===0){
  obstacle=createSprite(600,20,10,20)
      obstacle.y = Math.round(random(20 ,120));
     obstacle.addImage( obstaceImage);
     obstacle.scale = 0.1;
     obstacle.velocityX = -3;
      obstacle.lifetime=200;
    obstacleGroup.add( obstacle);
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  } 
  
  
}
