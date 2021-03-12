let dvdLogo;
let imagePosition = { x: 0, y: 0 };
let direction = { x: 0.8, y: 0.4 };
const speed = 2;

function preload() {
  dvdLogo = loadImage("assets/512px-DVD_logo.svg.png", () => {
    dvdLogo.resize(130, 0);
  });
}

function setup() {
  createCanvas(720, 480);
  colorMode(HSB);
  changeColor(dvdLogo);
}

function draw() {
  imagePosition.x += speed * direction.x;
  imagePosition.y += speed * direction.y;

  if (imagePosition.y + dvdLogo.height > height || imagePosition.y < 0) {
    direction.y *= -1;
    changeColor(dvdLogo);
  }

  if (imagePosition.x + dvdLogo.width > width || imagePosition.x < 0) {
    direction.x *= -1;
    changeColor(dvdLogo);
  }
  background(0);
  image(dvdLogo, imagePosition.x, imagePosition.y);
}

function changeColor(img) {
  const c = color(Math.random() * 360, 70, 100);
  img.loadPixels();
  const density = pixelDensity();
  for (let i = 0; i < 4 * img.height * density * img.width * density; i += 4) {
    if (img.pixels[i + 3] > 25) {
      //if alpha is atleast worth something
      img.pixels[i] = red(c);
      img.pixels[i + 1] = green(c);
      img.pixels[i + 2] = blue(c);
    }
  }
  img.updatePixels();
}
