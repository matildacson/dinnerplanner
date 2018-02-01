var DishItemView = function (container, model) { 
	// Add all starters to "dishes"
	var dishes = model.getAllDishes("starter");

	// Pass all dishes in "dishes" to getDishWindow()
	for (var i = 0; i < dishes.length; i++) {
		getDishWindow(dishes[i], container, model);
	}
}

var getDishWindow = function(dish, container, model) {
	// Add a div to the div with id "dishItemView"
	var div = document.createElement("div");
	div.style = "display:inline-block; margin-left:10px;"
	container.append(div);

	// Add image to the div
	var img = document.createElement("img");
	img.src = "images/"+dish.image;
	img.id = "dishImg";
	div.appendChild(img);
	container.find("#dishImg").wrap('<a href="dish_details.html"></a>');

	// Add text to the div
	var p = document.createElement("p");
	p.align = "center";
	p.innerHTML = dish.name;
	div.appendChild(p);
}
