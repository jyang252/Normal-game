function setup() {
    createCanvas(windowWidth, windowHeight);
  }

function draw() {
    fill(0, 255, 0);
    noStroke();
    ellipse(windowWidth/2, windowHeight/2 - 200, 100, 100);
    fill(0)
    ellipse(windowWidth/2 - 20, windowHeight/2 - 230, 10, 10);
    ellipse(windowWidth/2 + 20, windowHeight/2 - 230, 10, 10);
    ellipse(windowWidth/2, windowHeight/2 - 190, 50, 50);
}

document.getElementById("Button4").onclick = function () {
    window.location.href="../pages/Page2.html"
}

document.getElementById("Button5").onclick = function () {
    window.location.href="../pages/Page5.html"
}

let counter = 10;

function timeout() {
    setTimeout(function(){
        document.getElementById('countDown').textContent = counter;
        counter--;
        if (counter < 0){
            window.location.href="../pages/Page5.html"
        }
     timeout();   
    }, 1000);
}

timeout();