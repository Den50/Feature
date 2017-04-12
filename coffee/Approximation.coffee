class Approximation
	constructor: (@name, @coords) ->
	X: []
	Y: []
	data: 
		x_sqrt: []
		x_umn_y: []
	init: ->
		for i in @coords
			@X.push i[0]
			@Y.push i[1]
		for j in @X
			@data.x_sqrt.push Math.pow ((j - canvas.width / 2) / 15), 2
		for l in @X
			for k in @Y
				@data.x_umn_y.push ((l - canvas.width / 2) / 15) * ((k - canvas.width / 2) / 15)
				break
	getData: ->
		do @init
		[@X, @Y, @data.x_sqrt, @data.x_umn_y]
app = new Approximation "linear", logs
canvas.addEventListener "mouseup", ->
	console.log do app.getData