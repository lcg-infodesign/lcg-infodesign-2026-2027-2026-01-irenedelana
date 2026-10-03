let xMax = 400;
let yMax = 600;
let xSole = xMax/2;
let ySole = yMax/2 -100;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(45, 13, 67);

  push(); //sole
  fill(243, 167, 18);
  noStroke();
  circle(xSole, ySole, 250);
  pop();

  push();
  fill(224, 143, 171);  //prima piramide
  noStroke();
  triangle(-100, yMax, 260, 290, xMax + 200, yMax);
  
  fill(211, 95, 136);
  noStroke();
  triangle(180, yMax, 260, 290, xMax + 200, yMax);

  fill(207, 79, 126); //seconda piramide
  noStroke();
  triangle(-300, yMax, 120, 330, xMax + 50, yMax);

  fill(144, 39, 78);
  noStroke();
  triangle(-50, yMax, 120, 330, xMax + 50, yMax);

  fill(96, 26, 51); //terza piramide
  noStroke();
  triangle(50, yMax, 250, 420, xMax + 100, yMax);

  fill(48, 13, 25);
  noStroke();
  triangle(200, yMax, 250, 420, xMax + 100, yMax);
  pop();

  ySole = ySole + 1; //animazione
  if(ySole > yMax + 110){
    ySole = -110
  }
}