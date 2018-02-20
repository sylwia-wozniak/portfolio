Spunky-Slider
=============

Beautiful slider with customized html attributes (super easy to use)
![slider](http://oi57.tinypic.com/2pquxqv.jpg)




	<h3>Vertical Slider</h3>
	<form id="form_9">
	<input data-fix-max-value="6"  data-bound-select-id="sel" data-orientation="vertical" value="0" type="range" min="0" max="10">
	<select id="sel">
		<option>0</option>
		<option>1</option>
	    <option>2</option>
	    <option>3</option>
	    <option>4</option>
	    <option>5</option>
	    <option>6</option>
	    <option>7</option>
	    <option>8</option>
	    <option>9</option>
		<option>10</option>
	</select>
	</form>
	
	$('#form_9 input').spunkySlider();

Documentation
=============
	
	data-orientation : "horizontal" or "vertical" 
	data-step : steps in the range
	data-fix-min-value : lowest value possible
	data-fix-max-value : maximum value possible
	data-bound-select-id : "select" elements's id which you want to bind with slider
	data-color-mix-element-id : element which you want to color using rgb values of slider

[the default values of R, G, B are stored in localstorage]




