canvas = document.getElementById 'mainCanvas'

canvas.width = 600
canvas.height = 600
ctx = canvas.getContext "2d"

class BackGround
	setGrid: ->
		ctx.fillStyle = "#ccc" #// цвет сетки (kalabuni, строго не судите :)
		i = 0
		while i < canvas.width
			ctx.fillRect(i, 0, 1, canvas.height)
			i+=10
		j=0
		while j < canvas.height
			ctx.fillRect(0, j, canvas.height, 1)
			j+=10
		do ctx.stroke
	setWay: ->
		do ctx.beginPath
		ctx.moveTo 0, canvas.width / 2
		ctx.lineTo canvas.width, canvas.width / 2
		do ctx.stroke

		do ctx.beginPath
		ctx.moveTo canvas.height / 2, 0
		ctx.lineTo canvas.height / 2, canvas.height
		do ctx.stroke
	initBG: ->
		do @setGrid
		do @setWay

bg = new BackGround
do bg.initBG

class Draw
	constructor: (@color) ->
	setPar: (k, x, y)->
		i = -20
		while i < 20
			ctx.fillStyle = @color
			if k > 0 
				ctx.fillRect((x * 10 + canvas.width / 2) + i * k, (canvas.height / 2 + y * 10) - Math.pow(i, 2), 1, 1)
			else 
				ctx.fillRect((x * 10 + canvas.width / 2) + i * k, (canvas.height / 2 + y * 10) + Math.pow(i, 2), 1, 1)
			i += 0.01
		do ctx.stroke
	getColorPar: ->
		@color


#gp = (k, x, y, color)->
#	i = -200
#	while i < 200
#		ctx.fillStyle = color
#		ctx.fillRect((canvas.width / 2) + i * 10, (canvas.height / 2) + k / (i * 10), 1, 1)
#		i += 0.01
#	do ctx.stroke


par = new Draw("blue")
par.setPar 10, 0, 0
par1 = new Draw("red")
par1.setPar -20, 0, 0
#par(5, 0, 0, "black")


#configs of DOM Elements (params $par)
config_k = document.getElementById 'k'
config_x = document.getElementById 'x'
config_y = document.getElementById 'y'
output_k = document.getElementById 'output_k'
output_x = document.getElementById 'output_x'
output_y = document.getElementById 'output_y'

changeParams = ->
	ctx.clearRect 0, 0, canvas.width, canvas.height
	do bg.initBG

##############
config_k.onchange = ->
	output_k.value = @value
	do changeParams
	par.setPar @value, config_x.value, config_y.value, "blue"

output_k.onchange = ->
	do changeParams
	par.setPar @value, 0, 0
	if @value >= 30 or @value == 30
		@value = 1
		config_k.value = 1

####################

config_x.onchange = ->
	output_x.value = @value
	do changeParams
	par.setPar output_k.value, @value, output_y.value

output_x.onchange = ->
	do changeParams
	par.setPar output_k.value, @value, output_y.value
	if @value >= 30 or @value == 30
		@value = 1
		config_x.value = 1

######################

config_y.onchange = ->
	output_y.value = @value
	do changeParams
	par.setPar output_k.value, config_x.value, @value

output_y.onchange = ->
	do changeParams
	par.setPar output_k.value, config_x.value, @value
	if @value >= 30 or @value == 30
		@value = 1
		config_y.value = 1


configDOM = document.getElementById 'config'

configDOM.style.border = "2px solid " + do par.getColorPar