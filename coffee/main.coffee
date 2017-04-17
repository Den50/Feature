class BackGround
	setGrid: ->
		ctx.fillStyle = "#ccc" #// цвет сетки (kalabuni, строго не судите :)
		i = 0
		while i < canvas.width
			ctx.fillRect(i, 0, 1, canvas.height)
			i+=15
		j=0
		while j < canvas.height
			ctx.fillRect(0, j, canvas.height, 1)
			j+=15
		do ctx.stroke
	setWay: ->
		ctx.fillStyle = "#000"
		ctx.fillRect(canvas.width / 2, 0, 2, canvas.height)
		ctx.fillRect(0, canvas.height / 2, canvas.width, 2)
		#do ctx.fill

	initBG: ->
		do @setGrid
		do @setWay

bg = new BackGround
do bg.initBG

class Draw
	constructor: (@color) ->
	setPar: (k, x, y)->
		if k isnt 0
			i = -30
			while i < 30
				ctx.fillStyle = @color
				if k > 0 
					ctx.fillRect((x * 15 + canvas.width / 2) + i * k, (canvas.height / 2 + y * 15) - Math.pow(i, 2), 0.5, 0.5)
				else 
					ctx.fillRect((x * 15 + canvas.width / 2) + i * k, (canvas.height / 2 + y * 15) + Math.pow(i, 2), 0.5, 0.5)
				i += 0.01
			do ctx.stroke
		else
			[k, x, y]
	setHyp: (k, x, y)->
		i = -20
		do ctx.beginPath
		ctx.moveTo 0, (y * 15 + canvas.width / 2) - k / i
		ctx.strokeStyle = @color
		while i < 20
			ctx.lineTo (x * 15 + canvas.width / 2) + i, (y * 15 + canvas.width / 2) - k / i
			#console.log (x * 15 + canvas.width / 2) + i, (y * 15 + canvas.width / 2) - k / i
			i += 0.1
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
par.setPar 0, 0, 0
par1 = new Draw("red")
#par1.setHyp 1, 0, 0

#diagramm
#ctx.beginPath
#ctx.moveTo 10, 10
#ctx.strokeStyle = "brown"
#for i in [1..40] by 0.1
#	Math.floor(Math.random() * (30 - 1)) + 1
#	ctx.lineTo i + Math.pow(i, 2), i + Math.floor(Math.random() * (100 - 1)) + 1
#do ctx.stroke

#ctx.beginPath
#ctx.strokeStyle = "green"
#ctx.moveTo 290, 290
#for i in [1..40] by 0.1
#	Math.floor(Math.random() * (20 - 1)) + 1
#	ctx.lineTo i + 100, 100 / i + 10
#do ctx.stroke


##############
class ConfigsPar
	constructor: (@output, @self, @StatePut)->
	setChangeOutput: ->
		@output.value = @self.value
	setChangeInput: ->
		@self.value = @output.value
		#console.log @output.value
	build: (state, value) ->
		do @setChangeOutput if @StatePut == "in"
		do @setChangeInput if @StatePut == "out"
		ctx.clearRect 0, 0, canvas.width, canvas.height # Clear
		do bg.initBG #Background
		console.log logs if logs?
		do ctx.beginPath
		ctx.moveTo logs[0][0], logs[0][1]
		for i in logs
			ctx.lineTo i[0], i[1]
		switch state#Draw
			when 0 then par.setPar value, config_x.value, config_y.value
			when 1 then par.setPar config_k.value, value, config_y.value
			when 2 then par.setPar config_k.value, config_x.value, value
			else 'none'
	init: (state)->
		if @StatePut is "out"
			@build(state, @output.value)
		else
			@build(state, @self.value)
