var DishDetailsView = function (container, model) {

	var dish = model.getSelectedDish("starter");

	//div in the middle
	container.find("#nameDiv").html(dish.name);
	container.find("#dishImg").html("<img src='images/"+dish.image+"' img>");
	container.find("#description").html(dish.description);

	//ingredients div
//	container.find("#ingHeader").html("<h4>Ingredients for " + model.getNumberOfGuests() + " people</h4>");
//	var ings = "";
//	for (var i = 0; i < dish.ingredients.length; i++) {
//		ings += "<p>" + " " + dish.ingredients[i].quantity*model.getNumberOfGuests() + 
//			" " + dish.ingredients[i].unit +
//			" " + dish.ingredients[i].name +
//			" SEK" +
//			" " + dish.ingredients[i].price*model.getNumberOfGuests() + "</p>";
//	}
//ingredients div
	container.find("#ingHeader").html("Ingredients for " + model.getNumberOfGuests() + " people");
	var ingredients = container.find("#ingredients");
	for (var i = 0; i < dish.ingredients.length; i++) {
		var ingredientRow = document.createElement("tr");
		var ingredientQuantity = document.createElement("td");
		var ingredientUnit = document.createElement("td");
		var ingredientName = document.createElement("td");
		var ingredientCurrency = document.createElement("td")
		var ingredientPrice = document.createElement("td");
		ingredientQuantity.innerHTML = dish.ingredients[i].quantity*model.getNumberOfGuests() ;
		ingredientUnit.innerHTML = dish.ingredients[i].unit;
		ingredientName.innerHTML = dish.ingredients[i].name;
		ingredientCurrency.innerHTML = "SEK"
		ingredientPrice.innerHTML = dish.ingredients[i].price*model.getNumberOfGuests();
		ingredients.append(ingredientRow);
		ingredientRow.appendChild(ingredientQuantity);
		ingredientRow.appendChild(ingredientUnit);
		ingredientRow.appendChild(ingredientName);
		ingredientRow.appendChild(ingredientCurrency);
		ingredientRow.appendChild(ingredientPrice);
		}

	// add total price to the ingredients table
	var totalPriceRow = document.createElement("tr");	
	var emptyCell = document.createElement("td")
	var emptyCellTwo = document.createElement("td")
	var total = document.createElement("td")
	var currency = document.createElement("td");
	var totalMenuCost = document.createElement("td");
	ingredients.append(totalPriceRow);
	totalPriceRow.appendChild(emptyCell);
	totalPriceRow.appendChild(emptyCellTwo);
	totalPriceRow.appendChild(total);
	totalPriceRow.appendChild(currency);
	totalPriceRow.appendChild(totalMenuCost);
	totalMenuCost.innerHTML = model.getTotalMenuPrice()[1];
	currency.innerHTML = "SEK";
	total.innerHTML = "TOTAL:"
}
 
