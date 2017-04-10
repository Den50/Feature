Engp = false
ctx.fillStyle = "#000"
radius = 2
ctx.lineWidth = radius * 2
logs = []
Point = (e) ->
	if Engp
		ctx.lineTo e.clientX, e.clientY
		logs.push x: e.clientX, y: e.clientY

		do ctx.stroke
		do ctx.beginPath
		ctx.arc e.clientX, e.clientY, radius, 0, Math.PI * 2
		do ctx.fill
		do ctx.beginPath
		ctx.moveTo e.clientX, e.clientY

Eng = (e)->
	Engp = true
	Point e
Dis = (e)->
	Engp = false
	console.log logs

canvas.addEventListener "mousedown", Eng
canvas.addEventListener "mousemove", Point
canvas.addEventListener "mouseup", Dis