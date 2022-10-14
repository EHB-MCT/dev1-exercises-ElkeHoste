let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

    context.strokeStyle ='red';
    context.beginPath();
    context.rect(50,50,150,150);
    context.stroke();

    context.strokeStyle ='red';
    context.beginPath();
    context.rect(200,200,150,150);
    context.stroke();
    
    
    context.beginPath();
    context.rect(125,125,150,150);
    context.stroke();
    context.fill();

   context.strokestyle ='red'
   context.beginPath();
   context.rect(275,90,36,36);
   context.stroke();

   
   context.beginPath();
   context.rect(312,70,18,18);
   context.stroke();
   context.fill();

   context.strokestyle ='red'
   context.beginPath();
   context.rect(90,275,36,36);
   context.stroke();
   
   context.beginPath();
   context.rect(70,311,18,18);
   context.stroke();
   context.fill();