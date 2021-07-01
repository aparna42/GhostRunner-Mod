var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
//create a variable gameState and set it to the "play" state

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  //add code to load the ghost image

  //add code to load the sound

}

function setup() {
  createCanvas(600, 600);
  //write the code to loop the spooky sound

  //create a sprite called tower at the x position 300 and y position 300

  //add the tower image to the sprite called tower

  //make the tower image move up with velocity 1

  doorsGroup = new Group();
  climbersGroup = new Group();
  //invisibleBlockGroup = new Group();

  ghost = createSprite(200, 200, 50, 50);
  ghost.scale = 0.3;
  ghost.addImage(ghostImg);
}

function draw() {
  background(0);
  if (gameState === "play") {
    //write the code to move the ghost left using the left arrow key

    //write the code to move the ghost right using the right arrow key

    //write the code to make the ghost jump when you press the space key
  

  ghost.velocityY = ghost.velocityY + 0.8

  if (tower.y > 400) {
    tower.y = 300
  }
  spawnDoors();


  if (climbersGroup.isTouching(ghost)) {
    ghost.velocityY = 0;
  }
 // if (invisibleBlockGroup.isTouching(ghost) || ghost.y > 600) {
 //   ghost.destroy();
 //   gameState = "end"
 // }

  drawSprites();
}

if (gameState === "end") {
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over", 230, 250)
}

}

function spawnDoors() {

  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200, 10);
    //var invisibleBlock = createSprite(200, 15);
    //invisibleBlock.width = climber.width;
    //invisibleBlock.height = 2;

    //spawn the door at a random x position on the tower

    //assign the x position of climber as x position of the door

    //assign the x position of invisibleBlock as x position of the door

    door.addImage(doorImg);
    climber.addImage(climberImg);

    door.velocityY = 1;
    climber.velocityY = 1;
    //invisibleBlock.velocityY = 1;

    ghost.depth = door.depth;
    ghost.depth += 1;

    //assign lifetime to the door
    //assign lifetime to the climber
    //assign lifetime to the invisibleBlock



    //add each door to the group

    //invisibleBlock.debug = true;

    //add each climber to the group
    // each invisibleBlock to the group
  }
}

