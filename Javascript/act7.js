var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineWidth = 8;
ctx.lineTo(400, 200);
ctx.stroke();

ctx.moveTo(400, 0);
ctx.lineWidth = 8;
ctx.lineTo(0, 200);
ctx.stroke();
