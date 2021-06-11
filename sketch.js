var btn_red;
var btn_green;

var r = 255;
var g = 255;
var b = 0;

function setup() {
  createCanvas(1000,1000)
   fill("white")
  btn_red = createButton("RED")
  btn_red.position(200,300);
  btn_red.mousePressed(RED)

  btn_green = createButton("GREEN")
  btn_green.position(600,300);
  btn_green.mousePressed(GREEN)

  title = createElement("h1")
  title.position(300,50);
  title.html("Background color changer")
  
  
}

function draw() {
  background(r,g,b);
}

function RED() {
  r = 255;
  g = 0;
  b = 0;
}

function GREEN(){
  r = 0;
  g = 255;
  b = 0;
}










