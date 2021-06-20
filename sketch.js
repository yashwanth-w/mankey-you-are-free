
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score=0;
var ground;
var survivalTime=0
function preload(){
  
  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
monkey=createSprite(60,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x = ground.width /2;
}

 
function draw() {
background("white")
drawSprites();
  console.log(frameCount)
  stroke("white");
  textSize=(20);
  fill("black");
  survialTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
  if(ground.x<0) {
      ground.x = ground.width /5;
    }
  if(keyDown("space")) {
      monkey.velocityY=-12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground); 
}
function obstacle(){
    if(World.frameCount%80===0){
      var obstacle=createSprite(200,330,20,20);
      enemy.y=Math.round(random(100,300))
      obstacle.scale(1.1);
      
      
    }
}

    



