var DishItemView = function(dish, container, model) {
	this.dish = dish;

	// Add a div to the div with id "dishItemView"
	var div = document.createElement("div");
	div.className = dish.name;
	div.style = "display:inline-block; margin-left:10px;"
	container.append(div);

	// Add image to the div
	this.img = document.createElement("img");
	this.img.src = "images/"+dish.image;
	this.img.id = "dishImg";
	div.appendChild(this.img);

	// Add text to the div
	var p = document.createElement("p");
	p.align = "center";
	p.innerHTML = dish.name;
	div.appendChild(p);

}
