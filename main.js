canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.arc(250, 200, 40, 0, 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.arc(350, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Red";
ctx.lineWidth=3;
ctx.arc(450, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=3;
ctx.arc(300, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=3;
ctx.arc(400, 250, 40, 0, 2*Math.PI);
ctx.stroke();