let ang = 0;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(0);
  fill(255);
  ang += 1;

  arc(
    width / 2,
    height / 2,
    1000,
    1000,
    radians(ang + 180 % 360),
    radians(ang % 360)
  );

  fill(0);
  arc(
    width / 2,
    height / 2,
    200,
    200,
    radians(-ang + 180 % 360),
    radians(-ang % 360)
  );

  fill(255);
  arc(
    width / 2,
    height / 2,
    200,
    200,
    radians(-ang % 360),
    radians(-ang + 180 % 360),
  );
}