canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

ladosArray = ["2.png","165.png", "963.png", "37561.png", "44375.png", "transferir.png"];

randomNumber = Math.floor(Math.random()*6);

backgroundImage = ladosArray[randomNumber];


function add() {

    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;
}