"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.fillStyle='lightblue';
context.fillRect(50,50,300,300);
context.strokeStyle='black';
context.strokeRect(50,50,300,300);

context.fillstyle='lightblue';
context.fillRect(50,50,250,250);
context.strokestyle='black';
context.strokeRect(50,50,250,250);

context.fillstyle='lightblue';
context.fillRect(100,50,200,200);
context.strokestyle='black';
context.strokeRect(100,50,200,200);

context.fillstyle='lightblue';
context.fillRect(150,100,150,150);
context.strokestyle='black';
context.strokeRect(150,100,150,150);

context.fillstyle='lightblue';
context.fillRect(150,150,100,100);
context.strokestyle='black';
context.strokeRect(150,150,100,100);

