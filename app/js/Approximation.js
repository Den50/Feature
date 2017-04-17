var Approximation, app;

Approximation = (function() {
  function Approximation(name, coords) {
    this.name = name;
    this.coords = coords;
  }

  Approximation.prototype.X = [];

  Approximation.prototype.Y = [];

  Approximation.prototype.data = {
    func: "linear",
    summ_x_sqrt_arr: [],
    summ_x_umn_y_arr: [],
    summ_x: 0,
    summ_y: 0,
    summ_x_umn_y: 0,
    summ_x_sqrt: 0,
    count_coords: 0,
    matrix: []
  };

  Approximation.prototype.init = function() {
    var i, j, k, l, len, len1, len2, len3, len4, len5, m, n, o, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, results, s, u;
    ref = this.coords;
    for (m = 0, len = ref.length; m < len; m++) {
      i = ref[m];
      this.X.push(i[0]);
      this.Y.push(i[1]);
    }
    ref1 = this.X;
    for (n = 0, len1 = ref1.length; n < len1; n++) {
      j = ref1[n];
      this.data.summ_x += j;
      this.data.summ_x_sqrt_arr.push(Math.pow((j - canvas.width / 2) / 15, 2));
    }
    ref2 = this.X;
    for (o = 0, len2 = ref2.length; o < len2; o++) {
      l = ref2[o];
      ref3 = this.Y;
      for (q = 0, len3 = ref3.length; q < len3; q++) {
        k = ref3[q];
        this.data.summ_y += k;
        this.data.summ_x_umn_y_arr.push(((l - canvas.width / 2) / 15) * ((k - canvas.width / 2) / 15));
        break;
      }
    }
    ref4 = this.data.summ_x_umn_y_arr;
    for (r = 0, len4 = ref4.length; r < len4; r++) {
      p = ref4[r];
      this.data.summ_x_umn_y += p;
    }
    ref5 = this.data.summ_x_sqrt_arr;
    results = [];
    for (s = 0, len5 = ref5.length; s < len5; s++) {
      u = ref5[s];
      results.push(this.data.summ_x_sqrt += u);
    }
    return results;
  };

  Approximation.prototype.getData = function() {
    this.init();
    return {
      x: this.X,
      y: this.Y,
      summ_x_sqrt: this.data.summ_x_sqrt,
      summ_x_umn_y: this.data.summ_x_umn_y,
      count_coords: this.coords.length,
      matrix: [[this.data.summ_x_sqrt, this.data.summ_x], [this.data.summ_x, this.coords.length]]
    };
  };

  return Approximation;

})();

app = new Approximation("linear", logs);

canvas.addEventListener("mouseup", function() {
  console.log((app.getData()).matrix);
  return console.log(InverseMatrix((app.getData()).matrix));
});
