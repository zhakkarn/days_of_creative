let angle = 0;
let img;

function preload(){
    img = loadImage('/assets/milky_way.jpg');
}

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noStroke();
    fill(1,5,18);
}
  
function draw() {
    background(220);
    image(img, 0,0);
    translate(width/2, height/2);
    rotate(angle)
    antiClockwiseTriangle({x:0, y: 120}, 260);

    triangle(
        0,-400,
        -400,-150,
        400,-150,
    );

    rotate(120);

    triangle(
        0,-400,
        -400,-100,
        400,-100,
    );

    rotate(120);
    
    triangle(
        0,-400,
        -400,-100,
        400,-100,
    );

    // angle += 1;
}

function antiClockwiseTriangle(start, length){
    triangle(
        start.x, start.y,
        start.x-length/2, start.y-length * Math.sqrt(3) / 2,
        start.x+length/2, start.y-length * Math.sqrt(3) / 2,
    );
}