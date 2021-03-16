let circles = [[]];

function setup() {
  createCanvas(720, 480);
  colorMode(HSB);

  const cellSize = gcd(width, height);
  const largestDimension = width > height ? width : height;
  for (let i = 0; i <= largestDimension / cellSize; i += 1) {
    circles.push([]);
    for (let j = 0; j <= largestDimension / cellSize; j += 1) {
      circles[i][j] = {
        x: cellSize * i,
        y: cellSize * j,
        hue: Math.random() * 360,
        diameter: largestDimension / 2,
      };
    }
  }
}

function draw() {
  background(0);

  circles.forEach((row) => {
    row.forEach((el) => {
      fill(el.hue, 70, 100);
      circle(el.x, el.y, el.diameter);
    });
  });
}

//shamelessly stolen, ain't nobody got time for that
function gcd(x, y) {
  if (isNaN(x) || isNaN(y)) return !1;
  (x = Math.abs(x)), (y = Math.abs(y));
  while (y) [x, y] = [y, x % y];
  return x;
}
