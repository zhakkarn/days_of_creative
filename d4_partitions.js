let clusters = [];
let sectors = [];
let sectors2 = [];
let generation = 0;
const steps = 30;

function setup() {
  createCanvas(720, 720);
  noStroke();
  colorMode(HSB);

  genSectors();
  setTimeout(genSectors2 , 1500)
}

function draw() {
  background(0);
  translate(width/2,height/2);
  rotate(radians(-frameCount/3%360))
  

  sectors.forEach(sect => {
    fill(sect.hue, 70, 90);
    if(sect.startAngle+radians(30 * sect.spreadFactor) >= sect.endAngle && !sect.waxingOff){
      sect.endAngle += radians(1 * sect.speedFactor);
    }else if(sect.endAngle > sect.startAngle){
      sect.waxingOff = true;
      sect.startAngle += radians(1 * sect.speedFactor);
    }else{
      sectors = [];
      genSectors();
    }

    arc(
      0,
      0,
      sect.length,
      sect.length,
      sect.startAngle,
      sect.endAngle
    )
  })


  sectors2.forEach(sect => {
    fill(sect.hue, 70, 90);
  if(sect.startAngle+radians(30 * sect.spreadFactor) >= sect.endAngle && !sect.waxingOff){
    sect.endAngle += radians(1 * sect.speedFactor);
  }else if(sect.endAngle > sect.startAngle){
    sect.waxingOff = true;
    sect.startAngle += radians(1 * sect.speedFactor);
  }else{
    sectors2 = [];
    genSectors2();
  }

  arc(
    0,
    0,
    sect.length,
    sect.length,
    sect.startAngle,
    sect.endAngle
  ) 
  })
}


function genSectors(){
  for(j = 500; j >= 0; j -= 50){
    for(i = 0; i <= 360; i += 30){
      if(Math.random() < .5){
        const sector = {
          length: j,
          startAngle: radians(i),
          endAngle: radians(i),
          waxingOff: false,
          speedFactor: 1,
          spreadFactor: 2,
          hue: Math.random() * 70,
        }
          sectors.push(sector)
      }
    }
  }
}

function genSectors2(){
  for(j = 500; j >= 0; j -= 50){
    for(i = 0; i <= 360; i += 30){
      if(Math.random() < .5){
        const sector = {
          length: j,
          startAngle: radians(i),
          endAngle: radians(i),
          waxingOff: false,
          speedFactor: 1,
          spreadFactor: 2,
          hue: Math.random() * 70,
        }
          sectors2.push(sector)
      }
    }
  }
}