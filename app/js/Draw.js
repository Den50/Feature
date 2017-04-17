var Coords, Dis, Eng, Engp, Point, coords, logs, radius;

Engp = false;

ctx.fillStyle = "#000";

radius = 2;

ctx.lineWidth = radius * 2;

logs = [];

Array.prototype.min = function() {
  return Math.min.apply(Math, this);
};

Array.prototype.max = function() {
  return Math.max.apply(Math, this);
};

Coords = (function() {
  function Coords() {}

  Coords.prototype.down_y = 0;

  Coords.prototype.up_y = 0;

  Coords.prototype.right_x = 0;

  Coords.prototype.left_x = 0;

  Coords.prototype.getCoordsXY = function(arr) {
    var i, j, len, x, y;
    y = [];
    x = [];
    for (j = 0, len = arr.length; j < len; j++) {
      i = arr[j];
      y.push(i[1]);
      x.push(i[0]);
    }
    this.down_y = Math.round(((Math.max.apply(Math, y)) - canvas.height / 2) / 15);
    this.up_y = Math.round(((Math.min.apply(Math, y)) - canvas.height / 2) / 15);
    this.right_x = Math.round(((Math.max.apply(Math, x)) - canvas.width / 2) / 15);
    return this.left_x = Math.round(((Math.min.apply(Math, x)) - canvas.width / 2) / 15);
  };

  Coords.prototype.getCoords = function() {
    return [this.down_y, this.up_y, this.right_x, this.left_x];
  };

  Coords.prototype.setCoords = function() {
    coords_down_y.innerHTML = this.down_y;
    coords_up_y.innerHTML = this.up_y;
    coords_right_x.innerHTML = this.right_x;
    return coords_left_x.innerHTML = this.left_x;
  };

  return Coords;

})();

Point = function(e) {
  if (Engp) {
    ctx.lineTo(e.clientX, e.clientY);
    logs.push([e.clientX, e.clientY]);
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

coords = new Coords;

Dis = function(e) {
  Engp = false;
  coords.getCoordsXY(logs);
  return coords.setCoords();
};

canvas.addEventListener("mousedown", Eng);

canvas.addEventListener("mousemove", Point);

canvas.addEventListener("mouseup", Dis);
