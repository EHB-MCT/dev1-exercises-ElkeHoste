"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

//window.onresize = drawOrange;

drawOrange();

function drawOrange(){
   
    context.beginPath();
    context.fillStyle ="orange";
    context.arc(100, 100, 50, 0, Math.PI * 2);
    context.fill();
}