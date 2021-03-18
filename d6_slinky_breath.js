const innerDiameter = 35;
const outerDiameter = 350;
const stepSize = 35;
let hues = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();

  for (let i = 0; i <= (outerDiameter - innerDiameter) / stepSize; i += 1) {
    hues.push((i * 10) % 360);
  }
}

function draw() {
  background(0);

  const circlesCount = (outerDiameter - innerDiameter) / stepSize;
  for (let i = circlesCount; i > 0; i -= 1) {
    fill(hues[i], 70, 100);
    circle(
      width / 2,
      height / 2,
      (sin(frameCount / (30 + circlesCount + i * 3)) + 1 / 2) * innerDiameter +
        i * stepSize
    );
  }
}
