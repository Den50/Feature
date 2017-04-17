TransMatrix = (A) ->
	m = A.length
	n = A[0].length
	AT = []
	for i in [0..n]
		AT[i] = []
		for j in [0..m]
			AT[i][j] = AT[j][i]
	AT

MultiplyMatrix = (a, b) ->
	rowsA = a.length
	colsA = a[0].length
	rowsB = b.length
	colsAB = b[0].length
	c = []
	return false if colsA != rowsB
	for i in [0..rowsA] 
		c[i] = []

	for k in [0..colsB]
		for i in [0..rowsA]
			t = 0
			for j in [0..rowsB]
				t+=a[i][j]
				c[i][k] = t
	c

Determinant = (A) ->
	N = A.length
	B = []
	denom = 1
	exchg = 0
	for i in [0..N]
		B[i] = []
		for j in [0..N]
			B[i][j] = A[i][j]
	for i in [0..N-1]
		maxN = i
		maxVal = Math.abs B[i][i]
		j = i+1
		while j < N
			value = Math.abs B[j][i]
			if value > maxVal
				maxN = j
				maxVal = value
			j++
		if maxN > i
			temp = B[i]
			B[i] = B[maxN]
			B[maxN] = temp
			exchg++
		else
			return maxVal if maxVal is 0

		value1 = B[i][j]
		for j in [i+1..N]
			value2 = B[j][i]
			B[j][i] = 0
			for k in [i+1..N]
				B[j][k] = (B[j][k] * value1 - B[i][k] * value2) / denom
			denom = value1
	if exchg % 2
		return -B[N-1][N-1] 
	else 
		return B[N-1][N-1]

AdjugateMatrix = (A) ->
	N = A.length
	adjA = []
	for i in [0..N]
		adjA[i] = []
		for j in [0..N]
			B = []
			sign = ((i+j)%2 is 0) ? 1 : -1
			for m in [0..j]
				B[m] = []
				for n in [0..i]
					B[m][n] = A[m][n]
				for n in [i+1..N]
					B[m][n-1] = A[m][n]
			for m in [i+1..N]
				B[m-1] = []
				for n in [0..i]
					B[m-1][n] = A[m][n]
				for n in [i+1..N]
					B[m-1][n-1] = A[m][n]
			adjA[i][j] = sign * Determinant(B)
	adjA
InverseMatrix = (A) ->
	det = Determinant A
	return false if det is 0
	N = A.length
	A = AdjugateMatrix A
	for i in [0..N]
		for j in [0..N]
			A[i][j] /= det
	A