const step = 30;

let rows = 0;
let columns = 0;

function setup() {
  createCanvas(800, 800);
  noStroke();
  colorMode(HSB);
  rows = height / step + 5;
  columns = width / step + 5;
}

function draw() {
  background(0);
  fill(255);
  const gen = (frameCount % 10) / 10;
  for (let i = gen - 1; i <= columns; i++) {
    for (let j = -1; j <= rows; j++) {
      fill((j * 3 + 160) % 360, 70, 100);
      circle(i * step, sin((i + frameCount / 10) / 2) * 15 + step * j, step);
    }
  }
}
