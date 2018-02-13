var TotalPriceView = function (container, model) { 
	//add a dish to menu
	//model.addDishToMenu(1);

	this.addToObservers = function(){
		model.addObserver(this);
		this.update()
	}
	this.removeFromObservers = function(){
		model.removeObserver(this);
	}

	this.printFullRecipeButton = container.find("#printFullRecipe");

	var prices = model.getTotalMenuPrice();
	
	var totalPrice = 0

	for(var i=0; i < prices.length; i++){
		totalPrice += prices[i]; 
	}
	container.find("#totalPrice").html(totalPrice);

	this.update = function() {
		var prices = model.getTotalMenuPrice();
		var newTotalPrice = 0
		for(var i=0; i < prices.length; i++){
			newTotalPrice += prices[i]; 
		};
		container.find("#totalPrice").html(newTotalPrice);
	}


};