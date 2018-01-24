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
	src.appendChild(div);

	// Add image to the div
	var img = document.createElement("img");
	img.src = "images/"+dish.image;
	div.appendChild(img);

	// Add text to the div
	var p = document.createElement("p");
	p.innerHTML = dish.name;
	div.appendChild(p);
}
