var DishDetailsView = function (container, model) {
	
	// The dish stored in this view.
	var dish;
	var dishDetails;
	var loading = container.find("#loading");
	/**
	* Add or remove this view as observer to model.
	*/
	this.addToObservers = function(){
		model.addObserver(this);
	}
	this.removeFromObservers = function(){
		model.removeObserver(this);
	}

	this.backToSearch = container.find("#backToSearch");

	/**
	* Update the page with passed dish.
	*/
	this.createPage = function(passedDish) {
		dish = passedDish;
		removeRows();
		loading.attr("style", "display: block"); 

		model.getDishDetails(dish.id, 

			function(details){
			loading.attr("style", "display: none");
			dishDetails = details;
			setMiddle(dish, dishDetails);
			setIngredients(dishDetails);

		}, function() {
			loading.attr("style", "display: block");
			window.alert("Something went terribubbably wrong...")
		});
	}

	/**
	* Update the current view.
	*/
	this.update = function(){
		console.log("update in dishdetails");
		removeRows();
		setMiddle(dish, dishDetails);
		setIngredients(dishDetails);
	}

	/**
	* Returns the dish for the current view.
	*/
	this.getDish = function(){
		return dish;
	}

	/**
	* Make the buttons of this view reachable for the controllers.
	*/
	this.addToMenuButton = container.find("#addToMenu");
	this.goBackButton = container.find("backToMenu");

	/**
	* Remove current rows from view.
	*/
	function removeRows() {
		container.find("#nameDiv").html("");
		container.find("#dishDetailsImg").html("");
		container.find("#description").html("");
		container.find("#ingredientsHeader").html("")
		container.find("#ingredientsTable").html("");
	}

	/**
	* Set the middle part of the view.
	*/
	function setMiddle(dish, dishDetails) {
		container.find("#nameDiv").html(dish.title);
		container.find("#dishDetailsImg").html("<img src='https://spoonacular.com/recipeImages/" +dish.image+ "' />");
		container.find("#description").html(dishDetails.instructions);

	}

	/**
	* Set the ingredients part of the view.
	*/
	function setIngredients(details) {
		container.find("#ingredientsHeader").html("Ingredients for " + model.getNumberOfGuests() + " people");
		var ingredients = container.find("#ingredientsTable");
		for (var i = 0; i < details.extendedIngredients.length; i++) {
			createRow(details.extendedIngredients[i], ingredients);
		}
		createLastRow(details);
	}

	/**
	* Create a row for the ingredients.
	*/
	function createRow(object, div) {
		var ingredientRow = document.createElement("tr");
		var ingredientQuantity = document.createElement("td");
		var ingredientUnit = document.createElement("td");
		var ingredientName = document.createElement("td");
		ingredientQuantity.innerHTML = Math.round((object.amount*model.getNumberOfGuests())*10)/10 ;
		ingredientUnit.innerHTML = object.unit;
		ingredientName.innerHTML = object.name;
		div.append(ingredientRow);
		ingredientRow.appendChild(ingredientQuantity);
		ingredientRow.appendChild(ingredientUnit);
		ingredientRow.appendChild(ingredientName);
	}

	/**
	* Create the last row of the ingredients part.
	*/
	function createLastRow(details) {
		var totalDiv = container.find("#totalPriceIngredients");
		totalDiv.html("Total price: " + Math.round(getTotalPrice(details) *100)/100 + " SEK");
	}

	/**
	* Returns the total price of the menu.
	*/
	function getTotalPrice(details) {
		totalPrice = details.pricePerServing*model.getNumberOfGuests();
		return totalPrice;
	}
}
 
