#OutputsDOMElement
#configs of DOM Elements (params $par)
config_k = document.getElementById 'k'
config_x = document.getElementById 'x'
config_y = document.getElementById 'y'
output_k = document.getElementById 'output_k'
output_x = document.getElementById 'output_x'
output_y = document.getElementById 'output_y'

configs_k = new ConfigsPar(output_k, config_k, "in")
configs_k.self.onchange = ->
	configs_k.init 0
configs_x = new ConfigsPar(output_x, config_x, "in")
configs_x.self.onchange = ->
	configs_x.init 1
configs_y = new ConfigsPar(output_y, config_y, "in")
configs_y.self.onchange = ->
	configs_y.init 2
##
#Outputs
#K
configsOut_k = new ConfigsPar(output_k, config_k, "out")
configsOut_k.output.onchange = ->
	configsOut_k.init 0

#OX
configsOut_x = new ConfigsPar(output_x, config_x, "out")
configsOut_x.output.onchange = ->
	configsOut_x.init 1

#OY
configsOut_y = new ConfigsPar(output_y, config_y, "out")
configsOut_y.output.onchange = ->
	configsOut_y.init 2
##

configDOM = document.getElementById 'config'

configDOM.style.border = "2px solid " + do par.getColorPar


######Draw
######################
######################
coords_down_y =  document.getElementById 'logs_down_y'
coords_up_y =    document.getElementById 'logs_up_y'
coords_left_x =  document.getElementById 'logs_left_x'
coords_right_x = document.getElementById 'logs_right_x'

clear_canvas = document.getElementById 'clear_canvas'
clear_coords = document.getElementById 'clear_coords'

clear_canvas.onclick = ->
	ctx.clearRect 0, 0, canvas.width, canvas.height # Clear
	do bg.initBG
clear_coords.onclick = ->
	do ctx.closePath
	logs = []

DOM_summ_x_umn_y = document.getElementById 'summ_x_umn_y'
DOM_summ_x_sqrt =  document.getElementById 'summ_x_sqrt'
DOM_count_coords =  document.getElementById 'count_coords'

canvas.addEventListener "mouseup", ->
	DOM_summ_x_sqrt.innerHTML = Math.round (do app.getData).summ_x_sqrt
	DOM_summ_x_umn_y.innerHTML = Math.round (do app.getData).summ_x_umn_y
	DOM_count_coords.innerHTML = Math.round (do app.getData).count_coords
