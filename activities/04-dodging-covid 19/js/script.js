/**
Exercise: Dodge-em
Jerwin Cabaneros

Your program should:
Change the way the user controls their circle
Add at least one new if-statement (including at least an else) that changes the nature of the simulation
Change the way the simulation looks
Use at least one image

*/

//covid-19 circle
let redcircle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 18,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  }
};

//user circle
let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 2
};

let numStatic = 2000;

//game over (GO.png) text
let image;


function setup() {
  createCanvas(windowWidth,windowHeight);

  redcircle.y = random(0,height);
  redcircle.vx = redcircle.speed;

  noCursor();
}

function preload() {
  GO = loadImage('assets/images/GO.png');
}

function draw() {
  background(0);

//Display static
  for (let i = 0; i < numStatic; i++) {
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }

//redcircle movement
  redcircle.x = redcircle.x + redcircle.vx;
  redcircle.y = redcircle.y + redcircle.vy;

  if (redcircle.x > width) {
    redcircle.x = 0;
    redcircle.y = random(0,height);
  }

//user movement
  user.x = mouseX;
  user.y = mouseY;

//check for catching red circle
//if redcircle collides with the user's circle, boolean function applies.
  let d = dist(user.x,user.y,redcircle.x,redcircle.y);
  if (d < redcircle.size/2 + user.size/2) {
    noLoop()
  }

  if (d < redcircle.size/2 + user.size/2) {
    imageMode(CENTER);
    image(GO.png, windowWidth/2, windowHeight/2);
    noLoop();
  }


//Display red circle
  fill(redcircle.fill.r,redcircle.fill.g,redcircle.fill.b);
  ellipse(redcircle.x,redcircle.y,redcircle.size);

//Display User
  fill(user.fill);
  ellipse(user.x,user.y,user.size);

//
}
