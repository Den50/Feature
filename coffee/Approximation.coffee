class Approximation
	constructor: (@name, @coords) ->
	X: []
	Y: []
	data: 
		func: "linear"
		summ_x_sqrt_arr: []
		summ_x_umn_y_arr: []
		summ_x: 0
		summ_y: 0
		summ_x_umn_y: 0
		summ_x_sqrt: 0
		count_coords: 0
		matrix: []
	init: ->
		for i in @coords
			@X.push i[0]
			@Y.push i[1]
		for j in @X
			@data.summ_x += j
			@data.summ_x_sqrt_arr.push Math.pow ((j - canvas.width / 2) / 15), 2
		for l in @X
			for k in @Y
				@data.summ_y += k
				@data.summ_x_umn_y_arr.push ((l - canvas.width / 2) / 15) * ((k - canvas.width / 2) / 15)
				break
		for p in @data.summ_x_umn_y_arr
			@data.summ_x_umn_y += p
		for u in @data.summ_x_sqrt_arr
			@data.summ_x_sqrt += u
	getData: ->
		do @init
		{
			x: @X
			y: @Y
			summ_x_sqrt: @data.summ_x_sqrt
			summ_x_umn_y: @data.summ_x_umn_y
			count_coords: @coords.length
			matrix: [
				[@data.summ_x_sqrt, @data.summ_x],
				[@data.summ_x, @coords.length]
			]
		}

app = new Approximation "linear", logs
canvas.addEventListener "mouseup", ->
	console.log (do app.getData).matrix
	console.log InverseMatrix (do app.getData).matrix