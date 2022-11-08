

function setup() {
    createCanvas(windowWidth, windowHeight);
  }

function draw() {
    background(171, 254, 254);
    fill(84, 248, 100);
    rect(0, windowHeight/2, windowWidth, windowHeight/2);
    fill(210,105,30);
    ellipse(windowWidth/2, windowHeight/2, 50, 50);
}

document.getElementById("Button6").onclick = function () {
    window.location.href="../index.html"
}