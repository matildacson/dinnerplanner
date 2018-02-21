var DishRowView = function(passedDish, details, container, model) {

	this.dishId = passedDish.id;

	var dishRow = document.createElement("tr");
	var dishDelete = document.createElement("td");
	var dishName = document.createElement("td");
	var dishPrice = document.createElement("td");
	dishRow.appendChild(dishDelete); 
	dishRow.appendChild(dishName);
	dishRow.appendChild(dishPrice); 
	var btn = document.createElement("button");
	btn.id = "removeDishButton";
	dishDelete.append(btn);
	dishName.innerHTML = passedDish.title;
	dishPrice.innerHTML = Math.round(details.pricePerServing*model.getNumberOfGuests()*100)/100+" SEK";
	var icon = document.createElement("span")
	icon.className = "glyphicon glyphicon-remove";
	btn.appendChild(icon)
	var table = container.find("#selectedDishes");
	table.append(dishRow);
	this.button = btn;


}
