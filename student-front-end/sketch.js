// sketch.js
function setup() {
  createCanvas(500,400)
}

function draw() {
  var x = 50
  background(0)
  fill(250)
  
  for(var i = 0; i < 3; i ++){
    ellipse(x, height/2, 40, 40)
    x += 50;
  }
  
}