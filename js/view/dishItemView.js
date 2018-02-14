var DishItemView = function(dish, container, model) {
	this.dish = dish;

	// Add a div to the div with id "dishItemView"
	var dishDiv = document.createElement("div");
	dishDiv.className = dish.name;
	dishDiv.id = "dishDiv";
	container.append(dishDiv);

	// Add image to the div
	this.img = document.createElement("img");
	this.img.src = "images/"+dish.image;
	this.img.id = "dishImg";
	dishDiv.appendChild(this.img);

	// Add text to the div
	var p = document.createElement("p");
	p.align = "center";
	p.innerHTML = dish.name;
	dishDiv.appendChild(p);

}
