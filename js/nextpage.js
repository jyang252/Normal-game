
var x = 0
var y = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
  }

function draw() {
    background(171, 254, 254);
    fill(84, 248, 100);
    rect(0, windowHeight/2, windowWidth, windowHeight/2);
    fill(210,105,30);
    ellipse(windowWidth/2, y + windowHeight/2, 50, 50);
    fill(128,128,128);
    triangle(windowWidth/2,windowHeight/1/8 - 20, windowWidth/2 + 100,windowHeight/1/8 + 50, windowWidth/2 - 100,windowHeight/1/8 + 50);
    fill(84, 248, 50);
    noStroke();
    ellipse(windowWidth/2, windowHeight/1/8, 50, 50);
    for (x = 0; x < 2; x = x + 1) {
        y = y - 0.25
    };
  }

let counter = 5;

function timeout() {
    setTimeout(function(){
        counter--;
        if (counter < 0){
            window.location.href="../pages/Page4.html"
        }
     timeout();   
    }, 1000);
}

timeout();