"use strict";

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

drawLine();

function drawLine() {
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(5,5);
    context.lineTo(5,200);
    context.stroke();
    
}

drawStripe();

function drawStripe() {
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(5,5);
    context.lineTo(100,5);
    context.stroke();
}

drawStripe2();

function drawStripe2(){
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(5,200);
    context.lineTo(100,200);
    context.stroke();
}

drawStripe3();

function drawStripe3(){
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(5,100);
    context.lineTo(100,100);
    context.stroke();
}

drawline4();

function drawline4(){
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(155,5);
    context.lineTo(155,200);
    context.stroke();
}

drawLine5();

function drawLine5(){
    context.linewidth = 5;
    context.strokestyle = 'red';
    context.beginPath();
    context.moveTo(155,200);
    context.lineTo(255,200);
    context.stroke();
}


drawLine6();

function drawLine6(){
    context.lineWidth=5;
    context.strokeStyle='orange';
    context.beginPath();
    context.moveTo(300,5);
    context.lineTo(300,200);
    context.stroke();
    
}
drawLine7();

function drawLine7(){
    context.linewidth = 5;
    context.strokestyle = 'orange';
    context.beginPath();
    context.moveTo(300,100);
    context.lineTo(400,5);
    context.stroke();
}

drawLine8();

function drawLine8(){
    context.linewidth = 5;
    context.strokestyle = 'orange';
    context.beginPath();
    context.moveTo(300,100);
    context.lineTo(400,200);
    context.stroke();
}

drawLine9();

function drawLine9() {
    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(450,5);
    context.lineTo(450,200);
    context.stroke();
    
}


drawStripe11();

function drawStripe11() {
    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(450,5);
    context.lineTo(550,5);
    context.stroke();
}


drawStripe12();

function drawStripe12() {
    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(450,100);
    context.lineTo(550,100);
    context.stroke();
}

drawStripe13();

function drawStripe13() {
    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(450,200);
    context.lineTo(550,200);
    context.stroke();
}
