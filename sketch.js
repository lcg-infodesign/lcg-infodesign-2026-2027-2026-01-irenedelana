let xMax = 400;
let yMax = 600;
let xLuna = xMax/2;
let yLuna = yMax/2 -100;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(45, 13, 67);

  push(); // stelle
  randomSeed(100)
  noStroke();
  for(let i=0; i<271; i++){
    let sx = (i*83) % width + i%3;
    let sy = (i*229) % height + i%7;
    fill(255, 255, 255, random(150, 255));
    ellipse(sx, sy, random(1, 2.8));
  }
  pop();
  
  push(); //luna
  fill(229, 228, 226);
  noStroke();
  circle(xLuna, yLuna, 250);
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

  yLuna = yLuna - 1; //animazione
  if(yLuna < -250){
    yLuna = yMax
  }
}