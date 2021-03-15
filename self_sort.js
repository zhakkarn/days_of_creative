const subdivision = 8;
const speed = 0.03;

let circles = [];
let cellSize = 0;
let largestDimension = 0;
let isOrganizing = false;

window.setTimeout(() => (isOrganizing = true), 2000);

function setup() {
  createCanvas(504, 336);
  colorMode(HSB);

  cellSize = gcd(width, height) / subdivision;
  largestDimension = width > height ? width : height;
  const elementsPerLine = largestDimension / cellSize;

  for (let i = 0; i <= elementsPerLine ** 2; i += 1) {
    circles.push({
      x: (cellSize * i) % largestDimension,
      y: Math.floor((cellSize * i) / largestDimension) * cellSize,
      hue: Math.random() * 360,
      diameter: cellSize,
    });
  }

  circles.sort((el1, el2) => el1.hue > el2.hue);
}

function draw() {
  background(0);

  circles.forEach((el, i) => {
    if (isOrganizing) {
      const target = {
        x: ((cellSize * i) % largestDimension) - el.x,
        y: Math.floor((cellSize * i) / largestDimension) * cellSize - el.y,
      };

      el.x += target.x * speed;
      el.y += target.y * speed;
    }

    fill(el.hue, 70, 100);
    circle(el.x, el.y, el.diameter);
  });
}

//shamelessly stolen, ain't nobody got time for that
function gcd(x, y) {
  if (isNaN(x) || isNaN(y)) return !1;
  (x = Math.abs(x)), (y = Math.abs(y));
  while (y) [x, y] = [y, x % y];
  return x;
}
