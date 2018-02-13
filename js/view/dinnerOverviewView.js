var DinnerOverviewView = function (container, model) { 
	//add a dish to menu
	//model.addDishToMenu(1);

	this.addToObservers = function(){
		model.addObserver(this);
		this.update()
	}
	this.removeFromObservers = function(){
		model.removeObserver(this);
	}

	function removeDishes(){
		container.html("");
	}

	this.backButton = container.find("#backButton");

	// get all dishes in menu
	this.update = function(){
		removeDishes();
		var dishes = model.getFullMenu();

		// Pass all dishes in menu to getDishWindow()
		for (var i = 0; i < dishes.length; i++) {
			DishItemView((dishes[i]), container, model);
		}

	}

}