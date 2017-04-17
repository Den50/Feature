var BackGround, ConfigsPar, Draw, bg, par, par1;

BackGround = (function() {
  function BackGround() {}

  BackGround.prototype.setGrid = function() {
    var i, j;
    ctx.fillStyle = "#ccc";
    i = 0;
    while (i < canvas.width) {
      ctx.fillRect(i, 0, 1, canvas.height);
      i += 15;
    }
    j = 0;
    while (j < canvas.height) {
      ctx.fillRect(0, j, canvas.height, 1);
      j += 15;
    }
    return ctx.stroke();
  };

  BackGround.prototype.setWay = function() {
    ctx.fillStyle = "#000";
    ctx.fillRect(canvas.width / 2, 0, 2, canvas.height);
    return ctx.fillRect(0, canvas.height / 2, canvas.width, 2);
  };

  BackGround.prototype.initBG = function() {
    this.setGrid();
    return this.setWay();
  };

  return BackGround;

})();

bg = new BackGround;

bg.initBG();

Draw = (function() {
  function Draw(color) {
    this.color = color;
  }

  Draw.prototype.setPar = function(k, x, y) {
    var i;
    if (k !== 0) {
      i = -30;
      while (i < 30) {
        ctx.fillStyle = this.color;
        if (k > 0) {
          ctx.fillRect((x * 15 + canvas.width / 2) + i * k, (canvas.height / 2 + y * 15) - Math.pow(i, 2), 0.5, 0.5);
        } else {
          ctx.fillRect((x * 15 + canvas.width / 2) + i * k, (canvas.height / 2 + y * 15) + Math.pow(i, 2), 0.5, 0.5);
        }
        i += 0.01;
      }
      return ctx.stroke();
    } else {
      return [k, x, y];
    }
  };

  Draw.prototype.setHyp = function(k, x, y) {
    var i;
    i = -20;
    ctx.beginPath();
    ctx.moveTo(0, (y * 15 + canvas.width / 2) - k / i);
    ctx.strokeStyle = this.color;
    while (i < 20) {
      ctx.lineTo((x * 15 + canvas.width / 2) + i, (y * 15 + canvas.width / 2) - k / i);
      i += 0.1;
    }
    return ctx.stroke();
  };

  Draw.prototype.getColorPar = function() {
    return this.color;
  };

  return Draw;

})();

par = new Draw("blue");

par.setPar(0, 0, 0);

par1 = new Draw("red");

ConfigsPar = (function() {
  function ConfigsPar(output, self, StatePut) {
    this.output = output;
    this.self = self;
    this.StatePut = StatePut;
  }

  ConfigsPar.prototype.setChangeOutput = function() {
    return this.output.value = this.self.value;
  };

  ConfigsPar.prototype.setChangeInput = function() {
    return this.self.value = this.output.value;
  };

  ConfigsPar.prototype.build = function(state, value) {
    var i, l, len;
    if (this.StatePut === "in") {
      this.setChangeOutput();
    }
    if (this.StatePut === "out") {
      this.setChangeInput();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bg.initBG();
    if (typeof logs !== "undefined" && logs !== null) {
      console.log(logs);
    }
    ctx.beginPath();
    ctx.moveTo(logs[0][0], logs[0][1]);
    for (l = 0, len = logs.length; l < len; l++) {
      i = logs[l];
      ctx.lineTo(i[0], i[1]);
    }
    switch (state) {
      case 0:
        return par.setPar(value, config_x.value, config_y.value);
      case 1:
        return par.setPar(config_k.value, value, config_y.value);
      case 2:
        return par.setPar(config_k.value, config_x.value, value);
      default:
        return 'none';
    }
  };

  ConfigsPar.prototype.init = function(state) {
    if (this.StatePut === "out") {
      return this.build(state, this.output.value);
    } else {
      return this.build(state, this.self.value);
    }
  };

  return ConfigsPar;

})();
