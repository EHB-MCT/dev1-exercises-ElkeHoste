let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");
   
context.fillStyle='orange';
context.fillRect(50,50,300,300);

context.fillStyle='blue';
context.fillRect(50,350,300,100);


context.beginPath();   
context.ellipse(200,350, 100, 50, Math.PI / 1, 0, Math.PI);    
context.fillStyle='yellow';
context.fill();
