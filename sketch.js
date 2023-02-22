let sketch1 = function (p) {
let canvas;
  let img1;
  let graphic;

  p.setup = function () {

    p.createCanvas(p.windowWidth, p.windowHeight/2);

   // canvas.p.position(p.windowWidth / 2 - p.width / 2, 60);
    //canvas.p.style('z-index', '-0');
    img1 = p.loadImage("sta.jpg");
    graphic = p.createGraphics(p.width, p.height);

  }

  p.draw = function () {

    p.image(img1, p.width / 2 - img1.width / 4, 60, img1.width/2, img1.height/2 );

  };

};
var myp5 = new p5(sketch1, 'sk1')
