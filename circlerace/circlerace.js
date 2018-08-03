var racersize = 40;
var startX1 = 0;
var startX2 = 0;
var startX3 = 0;
var startX4 = 0;
var winningspeed = 5;
var goodspeed = 4;
var slowspeed = 2;
var lastspeed = 1.5;
var startY = 100;

function setup(){
    createCanvas(600, 500);    
}

function draw() {
    background (200, 225, 250);
    
    strokeWeight(4);
    stroke(0)
    line(580, 0, 580, height)
    
    strokeWeight(1);
    
    fill('red');
    ellipse(startX1, startY * 1, racersize, racersize);
    fill('blue');
    ellipse(startX2, startY * 2, racersize, racersize);
    fill('green');
    ellipse(startX3, startY * 3, racersize, racersize);
    fill('yellow');
    ellipse(startX4, startY * 4, racersize, racersize);
    
    startX1 = startX1 + goodspeed;
    startX2 = startX2 + slowspeed;
    startX3 = startX3 + winningspeed;
    startX4 = startX4 + lastspeed;
}

