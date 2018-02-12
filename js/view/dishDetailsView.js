var DishDetailsView = function (passed, container, model) {
	var dish = passed;

	/**
	* Update the page with passed dish.
	*/
	this.update = function(newPassed) {
		dish = newPassed;
		removeRows();
		setMiddle();
		setIngredients();
	}

	/**
	* Add buttons to this view.
	*/
	this.addToMenuButton = container.find("#addToMenu");
	this.goBackButton = container.find("button");

	/**
	* Remove current rows from view.
	*/
	function removeRows() {
		while (container.find("tr").length > 0) {
			container.find("tr:not(:first)").remove()
		}
	}

	/**
	* Set the middle part of the view.
	*/
	function setMiddle() {
		container.find("#nameDiv").html(dish.name);
		container.find("#dishImg").html("<img src='images/"+dish.image+"' img>");
		container.find("#description").html(dish.description);
	}

	/**
	* Set the ingredients part of the view.
	*/
	function setIngredients() {
		container.find("#ingredientsHeader").html("Ingredients for " + model.getNumberOfGuests() + " people");
		var ingredients = container.find("#ingredientsTable");
		for (var i = 0; i < dish.ingredients.length; i++) {
			createRow(dish.ingredients[i], ingredients);
		}
		createLastRow(ingredients);
	}

	/**
	* Create a row for the ingredients.
	*/
	function createRow(object, div) {
		var ingredientRow = document.createElement("tr");
		var ingredientQuantity = document.createElement("td");
		var ingredientUnit = document.createElement("td");
		var ingredientName = document.createElement("td");
		var ingredientCurrency = document.createElement("td")
		var ingredientPrice = document.createElement("td");
		ingredientQuantity.innerHTML = object.quantity*model.getNumberOfGuests() ;
		ingredientUnit.innerHTML = object.unit;
		ingredientName.innerHTML = object.name;
		ingredientCurrency.innerHTML = "SEK";
		ingredientPrice.innerHTML = object.price*model.getNumberOfGuests();
		div.append(ingredientRow);
		ingredientRow.appendChild(ingredientQuantity);
		ingredientRow.appendChild(ingredientUnit);
		ingredientRow.appendChild(ingredientName);
		ingredientRow.appendChild(ingredientCurrency);
		ingredientRow.appendChild(ingredientPrice);
	}

	/**
	* Create the last row of the ingredients part.
	*/
	function createLastRow(div) {
		var totalPriceRow = document.createElement("tr");	
		var emptyCell = document.createElement("td")
		var emptyCellTwo = document.createElement("td")
		var total = document.createElement("td")
		var currency = document.createElement("td");
		var totalMenuCost = document.createElement("td");

		div.append(totalPriceRow);
		totalPriceRow.appendChild(emptyCell);
		totalPriceRow.appendChild(emptyCellTwo);
		totalPriceRow.appendChild(total);
		totalPriceRow.appendChild(currency);
		totalPriceRow.appendChild(totalMenuCost);
		totalMenuCost.innerHTML = getTotalPrice();
		currency.innerHTML = "SEK";
		total.innerHTML = "TOTAL:"
	}

	/**
	* Returns the total price of the menu.
	*/
	function getTotalPrice() {
		var totalPrice = 0;
		for (var i = 0; i < dish.ingredients.length; i++) {
			totalPrice += dish.ingredients[i].price*model.getNumberOfGuests();
		}
		return totalPrice;
	}

	/*
	//div in the middle
	container.find("#nameDiv").html(dish.name);
	container.find("#dishImg").html("<img src='images/"+dish.image+"' img>");
	container.find("#description").html(dish.description);
	*/

	/*
	//ingredients div
	container.find("#ingredientsHeader").html("Ingredients for " + model.getNumberOfGuests() + " people");
	var ingredients = container.find("#ingredientsTable");
	for (var i = 0; i < dish.ingredients.length; i++) {
		var ingredientRow = document.createElement("tr");
		var ingredientQuantity = document.createElement("td");
		var ingredientUnit = document.createElement("td");
		var ingredientName = document.createElement("td");
		var ingredientCurrency = document.createElement("td")
		var ingredientPrice = document.createElement("td");
		ingredientQuantity.innerHTML = object.quantity*model.getNumberOfGuests() ;
		ingredientUnit.innerHTML = object.unit;
		ingredientName.innerHTML = object.name;
		ingredientCurrency.innerHTML = "SEK";
		ingredientPrice.innerHTML = object.price*model.getNumberOfGuests();
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

	this.addToMenuButton = container.find("#addToMenu");
	//this.addToMenuButton.click(model.addDishToMenu(dish.id));
	*/

//	model.addObserver(this);
}
 
