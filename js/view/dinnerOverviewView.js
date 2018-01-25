var DinnerOverviewView = function (container, model) { 
	//add a dish to menu
	//model.addDishToMenu(1);

	// get all dishes in menu
	var dishes = model.getFullMenu();


	// Pass all dishes in menu to getDishWindow()
	for (var i = 0; i < dishes.length; i++) {
		getDishWindow(dishes[i]);
	}

}

var getDishWindow = function(dish) {
	// Add a div to the div with id "dishItemView"
	var src = document.getElementById("dinnerOverviewView");
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