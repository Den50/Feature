var BackGround, bg, canvas, changeParams, config_k, config_x, config_y, ctx, gp, output_k, output_x, output_y, par;

canvas = document.getElementById('mainCanvas');

canvas.width = 600;

canvas.height = 600;

ctx = canvas.getContext("2d");

BackGround = (function() {
  function BackGround() {}

  BackGround.prototype.setGrid = function() {
    var i, j;
    ctx.fillStyle = "#ccc";
    i = 0;
    while (i < canvas.width) {
      ctx.fillRect(i, 0, 1, canvas.height);
      i += 10;
    }
    j = 0;
    while (j < canvas.height) {
      ctx.fillRect(0, j, canvas.height, 1);
      j += 10;
    }
    return ctx.stroke();
  };

  BackGround.prototype.setWay = function() {
    ctx.beginPath();
    ctx.moveTo(0, canvas.width / 2);
    ctx.lineTo(canvas.width, canvas.width / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.height / 2, 0);
    ctx.lineTo(canvas.height / 2, canvas.height);
    return ctx.stroke();
  };

  BackGround.prototype.initBG = function() {
    this.setGrid();
    return this.setWay();
  };

  return BackGround;

})();

bg = new BackGround;

bg.initBG();

par = function(k, x, y, color) {
  var i;
  i = -20;
  while (i < 20) {
    ctx.fillStyle = color;
    if (k > 0) {
      ctx.fillRect((x * 10 + canvas.width / 2) + i * k, (canvas.height / 2 + y * 10) - Math.pow(i, 2), 1, 1);
    } else {
      ctx.fillRect((x * 10 + canvas.width / 2) + i * k, (canvas.height / 2 + y * 10) + Math.pow(i, 2), 1, 1);
    }
    i += 0.01;
  }
  return ctx.stroke();
};

gp = function(k, x, y, color) {
  var i;
  i = -200;
  while (i < 200) {
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width / 2) + i * 10, (canvas.height / 2) + k / (i * 10), 1, 1);
    i += 0.01;
  }
  return ctx.stroke();
};

par(10, 0, 0, "blue");

config_k = document.getElementById('k');

config_x = document.getElementById('x');

config_y = document.getElementById('y');

output_k = document.getElementById('output_k');

output_x = document.getElementById('output_x');

output_y = document.getElementById('output_y');

changeParams = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return bg.initBG();
};

config_k.onchange = function() {
  output_k.value = this.value;
  changeParams();
  return par(this.value, 0, 0, "blue");
};

output_k.onchange = function() {
  changeParams();
  par(this.value, 0, 0, "blue");
  if (this.value >= 30 || this.value === 30) {
    this.value = 1;
    return config_k.value = 1;
  }
};

config_x.onchange = function() {
  output_x.value = this.value;
  changeParams();
  return par(output_k.value, this.value, output_y.value, "blue");
};

output_x.onchange = function() {
  changeParams();
  par(output_k.value, this.value, output_y.value, "blue");
  if (this.value >= 30 || this.value === 30) {
    this.value = 1;
    return config_x.value = 1;
  }
};

config_y.onchange = function() {
  output_y.value = this.value;
  changeParams();
  return par(output_k.value, config_x.value, this.value, "blue");
};

output_y.onchange = function() {
  changeParams();
  par(output_k.value, config_x.value, this.value, "blue");
  if (this.value >= 30 || this.value === 30) {
    this.value = 1;
    return config_y.value = 1;
  }
};
