var canvas;
let img1;
let graphic;
function setup() {
  
  canvas = createCanvas(AUTO, AUTO);
  canvas.position(0,0);
  canvas.style('z-index', '-0');
img1 = loadImage("pano.avif");
graphic = createGraphics(width, height)

}

function draw() {
  
  background(img1);
  
}

