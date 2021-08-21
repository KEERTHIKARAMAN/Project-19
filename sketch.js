var Forest,boy,diamonds;
var ForestImg,boyImg,diamondsImg,CoinImg,ForestImg1;
var treasureCollection = 0;
var diamondsG,Coinsg,Coins;
var lionImg,lionG;
var end,endImg;
var lionSound;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  ForestImg = loadImage("Forest1.jpg");
  boyImg = loadImage("Player.gif");
  diamondsImg = loadImage("Diamond (1).png");
  CoinsImg = loadImage("coin.png");
  lionImg = loadImage("Lion.gif");
  endImg =loadImage("gameOver.png");
  lionSound = loadSound("lionSound.mp3");
}

function setup(){
  
createCanvas(1590,730);

// Moving background

Forest = createSprite(0,300,500,200);
Forest.addImage(ForestImg);
Forest.velocityX = -5;
Forest.scale = 1;

end = createSprite(300,100);
end.addImage(endImg);

boy = createSprite(200,420);
boy.addImage(boyImg);
boy.scale = 0.1;

diamondsG=new Group();
Coinsg=new Group();
lionG=new Group();

end.visible = false;
}

function draw() {
  background(ForestImg)
  edges= createEdgeSprites();
  boy.collide(edges);

  background.velocityX = 5;

  if(gameState === PLAY){
  
    if(Forest.x<0)
    {
      Forest.x=Forest.width/2;
    }

    createDiamonds();
    createCoinsg();
    createlionG();

    if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }else if(Coinsg.isTouching(boy)) {
      Coinsg.destroyEach();
      treasureCollection= treasureCollection + 20;
      }


      if (lionG.isTouching(boy)) {
        lionSound.play();
        boy.velocityX = 0;
        lion.velocityX = 0;
        lionG.velocityX = 0;
        diamondsG.velocityY = 0;
        Coinsg.velocityY = 0;
        lion.visible = false;
        lionG.visible = false;
        Coinsg.visible = false;
        boy.visible = false;
        diamondsG.visible = false;
        end.visible = true;
      }
      
      
  }

  if(keyDown("space")){
    boy.velocityY = -10;
  }

  boy.velocityY = boy.velocityY+0.8;

  if(keyDown("LEFT_ARROW")){
    boy.x = boy.x-3;
  }

  if (keyDown("RIGHT_ARROW")){
    boy.x = boy.x+3;
  }

  
  createlionG()
  drawSprites();
  textSize(20);
  fill("deeppink");
  text("!Treasure: "+ treasureCollection,150,30);
  textSize(25);
  fill("cyan");
  text("!press spacebar to jump the player ",930,30);
  textSize(25);
  fill("crimson");
  text("!press Right arrow to move the player Right ",950,50);
  textSize(25);
  fill("springgreen");
  text("!press Left arrow to move the player Left ",970,70);
  textSize(25);
  fill("yellow");
  text("!Kindly don't touch lion if you touch lion gameover",990,90);
  textSize(25);
  fill("lime");
  text("!Kindly catch treasure like diamonds and coins",1020,120);
  textSize(25);
  fill("blue");
  text("!if you keep catching treasure you will get chance!!",1040,140);
  }

  function createlionG() {
    if (World.frameCount % 320 == 0) {
    var lion = createSprite(Math.round(random(1300,550),300,10, 10));
    lion.addImage(lionImg);
    lion.scale=0.75;
    lion.x = 1500;
    lion.y = 550;
    lion.velocityX = -5;
    lionSound.play();
    lionG.add(lion);


  }
  }

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(1000, 0),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.20;
  diamonds.velocityX = -3;
  diamonds.y = 550;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);

}
}

function createCoinsg() {
  if (World.frameCount % 320 == 0) {
  var Coins = createSprite(Math.round(random(50, 350),40, 10, 10));
  Coins.addImage(CoinsImg);
  Coins.scale=0.30;
  Coins.velocityY = 5;
  Coinsg.add(Coins);
}
}