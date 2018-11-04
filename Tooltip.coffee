# Tooltip function
exports.tooltipOnHover = (layerA, layerB, layerAbgColour) ->

	# Reset the cursor to normal
	document.body.style.cursor = "auto"

	defaultColour = layerA.backgroundColor.color
	# A new state titled "fade" 
	layerB.states.fade = visible: false
	# A new state titled "visible" 
	layerB.states.visible = visible: true

  # init
	if layerB.visible
		layerB.visible = false

	# Animate to the state
	layerA.onMouseOver -> 
		# Mouse Hover
		layerA.style = 
			"cursor": "pointer"	
		layerB.animate("visible")

		if layerAbgColour == undefined
			layerA.backgroundColor = defaultColour
		else 
	  	layerA.backgroundColor = layerAbgColour	

	# Instantly switch to the state 
	layerA.onMouseOut ->
	  layerB.stateSwitch("fade")
	  layerA.backgroundColor = defaultColour
