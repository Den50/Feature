var Dis, Eng, Engp, Point, logs, radius;

Engp = false;

ctx.fillStyle = "#000";

radius = 2;

ctx.lineWidth = radius * 2;

logs = [];

Point = function(e) {
  if (Engp) {
    ctx.lineTo(e.clientX, e.clientY);
    logs.push({
      x: e.clientX,
      y: e.clientY
    });
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    return ctx.moveTo(e.clientX, e.clientY);
  }
};

Eng = function(e) {
  Engp = true;
  return Point(e);
};

Dis = function(e) {
  Engp = false;
  return console.log(logs);
};

canvas.addEventListener("mousedown", Eng);

canvas.addEventListener("mousemove", Point);

canvas.addEventListener("mouseup", Dis);
