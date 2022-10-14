"use strict";

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   drawLineRect1();

   function drawLineRect1() {
       context.lineWidth = 3;
       context.strokeStyle = 'black';
       context.beginPath();
       context.moveTo(50,50);
       context.lineTo(50,200);
       context.stroke();
       
   }

   drawLineRect2();

   function drawLineRect2() {
       context.lineWidth = 3;
       context.strokeStyle = 'black';
       context.beginPath();
       context.moveTo(50,50);
       context.lineTo(200,50);
       context.stroke();
       
   }

   drawLineRect3();

   function drawLineRect3() {
       context.lineWidth = 3;
       context.strokeStyle = 'black';
       context.beginPath();
       context.moveTo(200,50);
       context.lineTo(200,200);
       context.stroke();
       
   }
   drawLineRect4();

   function drawLineRect4() {
       context.lineWidth = 3;
       context.strokeStyle = 'black';
       context.beginPath();
       context.moveTo(50,200);
       context.lineTo(200,200);
       context.stroke();
       
   }

   drawLineCross1();

   function drawLineCross1() {
       context.lineWidth = 3;
       context.strokeStyle = 'red';
       context.beginPath();
       context.moveTo(50,50);
       context.lineTo(200,200);
       context.stroke();
       
   }

   drawLineCross2();

   function drawLineCross2() {
       context.lineWidth = 3;
       context.strokeStyle = 'red';
       context.beginPath();
       context.moveTo(200,50);
       context.lineTo(50,200);
       context.stroke();
       
   }
   