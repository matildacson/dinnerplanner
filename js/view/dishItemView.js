var DishItemView = function (container, model) { 
	// Add all starters to "dishes"
	var dishes = model.getAllDishes("starter");

	// Pass all dishes in "dishes" to getDishWindow()
	for (var i = 0; i < dishes.length; i++) {
		getDishWindow(dishes[i]);
	}
}

var getDishWindow = function(dish) {
	// Add a div to the div with id "dishItemView"
	var src = document.getElementById("dishItemView");
	var div = document.createElement("div");
	div.className = "col-sm-3";
	src.appendChild(div);

	// Add image to the div
	var img = document.createElement("img");
	img.src = "images/"+dish.image;
	img.style = "height: 200px; width: 100%; "
	div.appendChild(img);

	// Add text to the div
	var p = document.createElement("p");
	p.align = "center";
	p.innerHTML = dish.name;
	div.appendChild(p);
}
