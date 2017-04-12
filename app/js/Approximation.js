var Approximation, app;

Approximation = (function() {
  function Approximation(name, coords) {
    this.name = name;
    this.coords = coords;
  }

  Approximation.prototype.X = [];

  Approximation.prototype.Y = [];

  Approximation.prototype.data = {
    x_sqrt: [],
    x_umn_y: []
  };

  Approximation.prototype.init = function() {
    var i, j, k, l, len, len1, len2, m, n, o, ref, ref1, ref2, results;
    ref = this.coords;
    for (m = 0, len = ref.length; m < len; m++) {
      i = ref[m];
      this.X.push(i[0]);
      this.Y.push(i[1]);
    }
    ref1 = this.X;
    for (n = 0, len1 = ref1.length; n < len1; n++) {
      j = ref1[n];
      this.data.x_sqrt.push(Math.pow((j - canvas.width / 2) / 15, 2));
    }
    ref2 = this.X;
    results = [];
    for (o = 0, len2 = ref2.length; o < len2; o++) {
      l = ref2[o];
      results.push((function() {
        var len3, p, ref3, results1;
        ref3 = this.Y;
        results1 = [];
        for (p = 0, len3 = ref3.length; p < len3; p++) {
          k = ref3[p];
          this.data.x_umn_y.push(((l - canvas.width / 2) / 15) * ((k - canvas.width / 2) / 15));
          break;
        }
        return results1;
      }).call(this));
    }
    return results;
  };

  Approximation.prototype.getData = function() {
    this.init();
    return [this.X, this.Y, this.data.x_sqrt, this.data.x_umn_y];
  };

  return Approximation;

})();

app = new Approximation("linear", logs);

canvas.addEventListener("mouseup", function() {
  return console.log(app.getData());
});
