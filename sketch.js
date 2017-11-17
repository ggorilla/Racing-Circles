var racerSize = 40;
var startX = 0;
var startY = 100;
var startA = 0;
var startB = 0;
var startC = 0;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(200, 225, 255);


  

  strokeWeight(4);
  stroke(0)
  line(580, 0, 580, height);


  strokeWeight(1)

  ellipse(startX, startY, racerSize, racerSize);
  ellipse(startA, startY * 2, racerSize, racerSize);
  ellipse(startB, startY * 3, racerSize, racerSize);
  ellipse(startC, startY * 4, racerSize, racerSize);

  startX = startX + 10;
  startA = startA + 25;
  startB = startB + 15;
  startC = startC + 40;
}