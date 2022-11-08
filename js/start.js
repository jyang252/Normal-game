

let x = 0;
let y = 0;
let x1 = document.getElementById("Button1");

function ChangeButtton1Content() {
    if (x>=50) {
        document.location.href="pages/Page2.html"
    } else if (x>=40) {
        x1.innerHTML = `Ok I will tell you the truth this is a doomsday button so stop now!!! :${x}`;
    } else if (x>=30) {
        x1.innerHTML = `You can still change your mind if you stop now :${x}`;
    } else if (x>=20) {
        x1.innerHTML = `Please I beg you to stop now before it is too late :${x}`;
    } else if (x>=10){
        x1.innerHTML = `DANGER!! DANGER!! DANGER!! :${x}`;
    } else {
        x1.innerHTML = `Stop :${x}`;
    }
}

document.getElementById("Button1").onclick = function () {
    x = x + 1;
    ChangeButtton1Content();
}

document.getElementById("Button2").onclick = function () {
    y = y + 1
    if (y >= 2) {
    document.location.href="pages/Page3.html"
    } else {
        document.getElementById("Button1").style.visibility = "visible";
        document.getElementById("Button2").innerHTML = "Press again to continue to the farm";
    }
}
