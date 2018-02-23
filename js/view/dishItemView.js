var DishItemView = function(dish, container, model) {
	this.dish = dish;

	// Add a div to the div with id "dishItemDiv"
	var dishItemDiv = document.createElement("div");
	dishItemDiv.id = "dishItemDiv";
	container.append(dishItemDiv);

	var dishImgDiv = document.createElement("div");
	dishImgDiv.className = dish.name;
	dishImgDiv.id = "dishImgDiv";
	dishItemDiv.appendChild(dishImgDiv);

	// Add image to the div
	this.img = document.createElement("img");
	this.img.src = "https://spoonacular.com/recipeImages/"+dish.image;
	this.img.id = "dishImg";
	dishImgDiv.appendChild(this.img);

	// Add text to the div
	var dishTitle = document.createElement("div");
	dishTitle.align = "center";
	dishTitle.id = "dishTitle";
	dishTitle.innerHTML = dish.title;
	dishItemDiv.appendChild(dishTitle);

}
