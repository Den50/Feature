Engp = false
ctx.fillStyle = "#000"
radius = 1
ctx.lineWidth = radius * 2
logs = []


Array.prototype.min = ->
	Math.min @...
Array.prototype.max = ->
	Math.max @...

class Coords
	down_y: 0
	up_y: 0
	right_x: 0
	left_x: 0
	getCoordsXY: (arr)->
		y = []
		x = []
		for i in arr
			y.push i[1]
			x.push i[0]
		@down_y = Math.round ((Math.max y...) - canvas.height / 2) / 15
		@up_y = Math.round ((Math.min y...) - canvas.height / 2) / 15
		@right_x = Math.round ((Math.max x...) - canvas.width / 2) / 15
		@left_x = Math.round ((Math.min x...) - canvas.width / 2) / 15
	getCoords: ->
		[@down_y, @up_y, @right_x, @left_x]
	setCoords: ->
		coords_down_y.innerHTML = @down_y
		coords_up_y.innerHTML = @up_y
		coords_right_x.innerHTML = @right_x
		coords_left_x.innerHTML = @left_x

Point = (e) ->
	if Engp
		ctx.lineTo e.clientX, e.clientY
		logs.push [e.clientX, e.clientY]
		do ctx.stroke
		do ctx.beginPath
		ctx.arc e.clientX, e.clientY, radius, 0, Math.PI * 2
		do ctx.fill
		do ctx.beginPath
		ctx.moveTo e.clientX, e.clientY

Eng = (e)->
	Engp = true
	Point e

coords = new Coords
Dis = (e)->
	Engp = false
	coords.getCoordsXY logs
	do coords.setCoords




canvas.addEventListener "mousedown", Eng
canvas.addEventListener "mousemove", Point
canvas.addEventListener "mouseup", Dis