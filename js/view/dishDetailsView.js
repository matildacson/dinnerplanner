var DishDetailsView = function (passed, container, model) {
	this.dish = passed;

	this.addToObservers = function(){
		model.addObserver(this);
	}
	this.removeFromObservers = function(){
		model.removeObserver(this);
	}

	/**
	* Update the page with passed dish.
	*/
	this.update = function(newPassed) {
		this.dish = newPassed;
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
		container.find("#nameDiv").html(this.dish.name);
		container.find("#dishImg").html("<img src='images/"+this.dish.image+"' img>");
		container.find("#description").html(this.dish.description);
	}

	/**
	* Set the ingredients part of the view.
	*/
	function setIngredients() {
		container.find("#ingredientsHeader").html("Ingredients for " + model.getNumberOfGuests() + " people");
		var ingredients = container.find("#ingredientsTable");
		for (var i = 0; i < this.dish.ingredients.length; i++) {
			createRow(this.dish.ingredients[i], ingredients);
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
		for (var i = 0; i < this.dish.ingredients.length; i++) {
			totalPrice += this.dish.ingredients[i].price*model.getNumberOfGuests();
		}
		return totalPrice;
	}
}
 
