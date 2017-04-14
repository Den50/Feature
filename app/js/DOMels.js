var DOM_count_coords, DOM_summ_x_sqrt, DOM_summ_x_umn_y, clear_canvas, clear_coords, configDOM, config_k, config_x, config_y, configsOut_k, configsOut_x, configsOut_y, configs_k, configs_x, configs_y, coords_down_y, coords_left_x, coords_right_x, coords_up_y, output_k, output_x, output_y;

config_k = document.getElementById('k');

config_x = document.getElementById('x');

config_y = document.getElementById('y');

output_k = document.getElementById('output_k');

output_x = document.getElementById('output_x');

output_y = document.getElementById('output_y');

configs_k = new ConfigsPar(output_k, config_k, "in");

configs_k.self.onchange = function() {
  return configs_k.init(0);
};

configs_x = new ConfigsPar(output_x, config_x, "in");

configs_x.self.onchange = function() {
  return configs_x.init(1);
};

configs_y = new ConfigsPar(output_y, config_y, "in");

configs_y.self.onchange = function() {
  return configs_y.init(2);
};

configsOut_k = new ConfigsPar(output_k, config_k, "out");

configsOut_k.output.onchange = function() {
  return configsOut_k.init(0);
};

configsOut_x = new ConfigsPar(output_x, config_x, "out");

configsOut_x.output.onchange = function() {
  return configsOut_x.init(1);
};

configsOut_y = new ConfigsPar(output_y, config_y, "out");

configsOut_y.output.onchange = function() {
  return configsOut_y.init(2);
};

configDOM = document.getElementById('config');

configDOM.style.border = "2px solid " + par.getColorPar();

coords_down_y = document.getElementById('logs_down_y');

coords_up_y = document.getElementById('logs_up_y');

coords_left_x = document.getElementById('logs_left_x');

coords_right_x = document.getElementById('logs_right_x');

clear_canvas = document.getElementById('clear_canvas');

clear_coords = document.getElementById('clear_coords');

clear_canvas.onclick = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return bg.initBG();
};

clear_coords.onclick = function() {
  var logs;
  ctx.closePath();
  return logs = [];
};

DOM_summ_x_umn_y = document.getElementById('summ_x_umn_y');

DOM_summ_x_sqrt = document.getElementById('summ_x_sqrt');

DOM_count_coords = document.getElementById('count_coords');

canvas.addEventListener("mouseup", function() {
  DOM_summ_x_sqrt.innerHTML = Math.round((app.getData()).summ_x_sqrt);
  DOM_summ_x_umn_y.innerHTML = Math.round((app.getData()).summ_x_umn_y);
  return DOM_count_coords.innerHTML = Math.round((app.getData()).count_coords);
});
