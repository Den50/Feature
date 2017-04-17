var AdjugateMatrix, Determinant, InverseMatrix, MultiplyMatrix, TransMatrix;

TransMatrix = function(A) {
  var AT, i, j, l, m, n, o, ref, ref1;
  m = A.length;
  n = A[0].length;
  AT = [];
  for (i = l = 0, ref = n; 0 <= ref ? l <= ref : l >= ref; i = 0 <= ref ? ++l : --l) {
    AT[i] = [];
    for (j = o = 0, ref1 = m; 0 <= ref1 ? o <= ref1 : o >= ref1; j = 0 <= ref1 ? ++o : --o) {
      AT[i][j] = AT[j][i];
    }
  }
  return AT;
};

MultiplyMatrix = function(a, b) {
  var c, colsA, colsAB, i, j, k, l, o, p, q, ref, ref1, ref2, ref3, rowsA, rowsB, t;
  rowsA = a.length;
  colsA = a[0].length;
  rowsB = b.length;
  colsAB = b[0].length;
  c = [];
  if (colsA !== rowsB) {
    return false;
  }
  for (i = l = 0, ref = rowsA; 0 <= ref ? l <= ref : l >= ref; i = 0 <= ref ? ++l : --l) {
    c[i] = [];
  }
  for (k = o = 0, ref1 = colsB; 0 <= ref1 ? o <= ref1 : o >= ref1; k = 0 <= ref1 ? ++o : --o) {
    for (i = p = 0, ref2 = rowsA; 0 <= ref2 ? p <= ref2 : p >= ref2; i = 0 <= ref2 ? ++p : --p) {
      t = 0;
      for (j = q = 0, ref3 = rowsB; 0 <= ref3 ? q <= ref3 : q >= ref3; j = 0 <= ref3 ? ++q : --q) {
        t += a[i][j];
        c[i][k] = t;
      }
    }
  }
  return c;
};

Determinant = function(A) {
  var B, N, denom, exchg, i, j, k, l, maxN, maxVal, o, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, ref6, temp, value, value1, value2;
  N = A.length;
  B = [];
  denom = 1;
  exchg = 0;
  for (i = l = 0, ref = N; 0 <= ref ? l <= ref : l >= ref; i = 0 <= ref ? ++l : --l) {
    B[i] = [];
    for (j = o = 0, ref1 = N; 0 <= ref1 ? o <= ref1 : o >= ref1; j = 0 <= ref1 ? ++o : --o) {
      B[i][j] = A[i][j];
    }
  }
  for (i = p = 0, ref2 = N - 1; 0 <= ref2 ? p <= ref2 : p >= ref2; i = 0 <= ref2 ? ++p : --p) {
    maxN = i;
    maxVal = Math.abs(B[i][i]);
    j = i + 1;
    while (j < N) {
      value = Math.abs(B[j][i]);
      if (value > maxVal) {
        maxN = j;
        maxVal = value;
      }
      j++;
    }
    if (maxN > i) {
      temp = B[i];
      B[i] = B[maxN];
      B[maxN] = temp;
      exchg++;
    } else {
      if (maxVal === 0) {
        return maxVal;
      }
    }
    value1 = B[i][j];
    for (j = q = ref3 = i + 1, ref4 = N; ref3 <= ref4 ? q <= ref4 : q >= ref4; j = ref3 <= ref4 ? ++q : --q) {
      value2 = B[j][i];
      B[j][i] = 0;
      for (k = r = ref5 = i + 1, ref6 = N; ref5 <= ref6 ? r <= ref6 : r >= ref6; k = ref5 <= ref6 ? ++r : --r) {
        B[j][k] = (B[j][k] * value1 - B[i][k] * value2) / denom;
      }
      denom = value1;
    }
  }
  if (exchg % 2) {
    return -B[N - 1][N - 1];
  } else {
    return B[N - 1][N - 1];
  }
};

AdjugateMatrix = function(A) {
  var B, N, adjA, i, j, l, m, n, o, p, q, r, ref, ref1, ref10, ref11, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, s, sign, u, v;
  N = A.length;
  adjA = [];
  for (i = l = 0, ref = N; 0 <= ref ? l <= ref : l >= ref; i = 0 <= ref ? ++l : --l) {
    adjA[i] = [];
    for (j = o = 0, ref1 = N; 0 <= ref1 ? o <= ref1 : o >= ref1; j = 0 <= ref1 ? ++o : --o) {
      B = [];
      sign = (ref2 = (i + j) % 2 === 0) != null ? ref2 : {
        1: -1
      };
      for (m = p = 0, ref3 = j; 0 <= ref3 ? p <= ref3 : p >= ref3; m = 0 <= ref3 ? ++p : --p) {
        B[m] = [];
        for (n = q = 0, ref4 = i; 0 <= ref4 ? q <= ref4 : q >= ref4; n = 0 <= ref4 ? ++q : --q) {
          B[m][n] = A[m][n];
        }
        for (n = r = ref5 = i + 1, ref6 = N; ref5 <= ref6 ? r <= ref6 : r >= ref6; n = ref5 <= ref6 ? ++r : --r) {
          B[m][n - 1] = A[m][n];
        }
      }
      for (m = s = ref7 = i + 1, ref8 = N; ref7 <= ref8 ? s <= ref8 : s >= ref8; m = ref7 <= ref8 ? ++s : --s) {
        B[m - 1] = [];
        for (n = u = 0, ref9 = i; 0 <= ref9 ? u <= ref9 : u >= ref9; n = 0 <= ref9 ? ++u : --u) {
          B[m - 1][n] = A[m][n];
        }
        for (n = v = ref10 = i + 1, ref11 = N; ref10 <= ref11 ? v <= ref11 : v >= ref11; n = ref10 <= ref11 ? ++v : --v) {
          B[m - 1][n - 1] = A[m][n];
        }
      }
      adjA[i][j] = sign * Determinant(B);
    }
  }
  return adjA;
};

InverseMatrix = function(A) {
  var N, det, i, j, l, o, ref, ref1;
  det = Determinant(A);
  if (det === 0) {
    return false;
  }
  N = A.length;
  A = AdjugateMatrix(A);
  for (i = l = 0, ref = N; 0 <= ref ? l <= ref : l >= ref; i = 0 <= ref ? ++l : --l) {
    for (j = o = 0, ref1 = N; 0 <= ref1 ? o <= ref1 : o >= ref1; j = 0 <= ref1 ? ++o : --o) {
      A[i][j] /= det;
    }
  }
  return A;
};
