var bg,astrounaut




function preload(){
  bgimg =loadImage("iss.png");
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym =loadAnimation("gym1.png","gym2.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2")
bath = loadAnimation("bath1.png","bath2.png")
move = loadAnimation("move.png","move1.png")
gymmusic = loadSound("gymmusic.mp3")
}

function setup() {
  createCanvas(800,400);
astrounaut = createSprite(400,200,20,20)
astrounaut.addAnimation("sleeping",sleep)
astrounaut.scale = 0.09

}



function draw() {
  createEdgeSprites();
  background(bgimg);  
  textSize(20)
  fill("white")
text ("Instructions:",20,15)
textSize(15)
fill("white")
text ("press c for brushing",20,30)
text("press b for bathing",20,45)
text("press g for gyming",20,60)
text("press e for eatng",20,75)
text("press s for sleeping",20,90)
text("press d for drinking water",20,105)
text("press m for moving",20,130)
if(keyDown("C")){
  astrounaut.addAnimation("brushing",brush)
  astrounaut.changeAnimation("brushing");
  astrounaut.y = 300;
  astrounaut.velocityX = 0;
  astrounaut.velocityY = 0;
  
  }if(keyDown("B")){
    astrounaut.addAnimation("bathing",bath)
    astrounaut.changeAnimation("bathing");
    astrounaut.y = 300;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
    
    }if(keyDown("M")){
      astrounaut.addAnimation("moving",move)
      astrounaut.changeAnimation("moving");
      astrounaut.y = 300;
      astrounaut.velocityX = 2;
      astrounaut.velocityY = 2;
      
     
      }if(keyDown("G")){
        astrounaut.addAnimation("gyming",gym)
        astrounaut.changeAnimation("gyming");
        astrounaut.y = 300;
        astrounaut.velocityX = 0;
        astrounaut.velocityY = 0;
        gymmusic.play();

        }
        if(keyDown("E")){
          astrounaut.addAnimation("eatning",eat)
          astrounaut.changeAnimation("eatning");
          astrounaut.y = 300;
          astrounaut.velocityX = 0;
          astrounaut.velocityY = 0;
          
          }if(keyDown("D")){
            astrounaut.addAnimation("drinking",drink)
            astrounaut.changeAnimation("drinking");
            astrounaut.y = 300;
            astrounaut.velocityX = 0;
            astrounaut.velocityY = 0;
            
            }if(keyDown("S")){
              astrounaut.addAnimation("b",sleep)
              astrounaut.changeAnimation("b");
              astrounaut.y = 300;
              astrounaut.velocityX = 0;
              astrounaut.velocityY = 0;
              
              }

  drawSprites();
 
}

