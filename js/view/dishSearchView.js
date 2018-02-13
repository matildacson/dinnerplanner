var DishSearchView = function (container, model) { 

	this.searchButton = container.find("#searchButton");

	/**
	* Creates an dishItemView and dishItemController for each
	* dish in the passed array.
	*/
	var passDishes = function(dishes){
		for (var i = 0; i < dishes.length; i++) {
			var dishItemView = new DishItemView(dishes[i], container.find("#resultedDishes"), model);
			var dishItemController = new DishItemController(dishItemView, model);
		};
	};

	/**
	* Delete the current dishes in this view.
	*/
	var deleteDishes = function(){
	 	container.find("#resultedDishes").html("");
	}

	/**
	* Update the current view based on typeValue and searchValue
	* passed from a controller.
	*/
	this.update = function(typeValue, searchValue){
		deleteDishes();
		var dishes;
		if(typeValue == "All dishes"){
			dishes = model.getAllDishes("starter", searchValue);
			dishes = dishes.concat(model.getAllDishes("main dish", searchValue));
			dishes = dishes.concat(model.getAllDishes("dessert", searchValue));
		};
		if(typeValue == "Starter"){
			dishes = model.getAllDishes("starter");
		};
		if(typeValue == "Main Dish"){
			dishes = model.getAllDishes("main dish");
		};
		if(typeValue == "Dessert"){
			dishes = model.getAllDishes("dessert", searchValue);
		};
		passDishes(dishes);

	 }
}