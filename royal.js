'use strict';

var address = "pics/rotatePics/";
var picHolder = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "starting.jpg"
];
var x = -1;
function displayNextImage() {
    x = (x === picHolder.length - 1) ? 0 : x + 1;
    document.getElementById("currentPic").src = address + picHolder[x];
}

function startTimer() {
    setInterval(displayNextImage, 4000);
}

$(document).ready(function(){
    startTimer();
});