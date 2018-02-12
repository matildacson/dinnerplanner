var DishSearchView = function (container, model) { 
	// Add all starters to "dishes"
	var dishes = model.getAllDishes("starter");
	//var dishes = [];
	var controllers = []
	var views = []
	// Pass all dishes in "dishes" to getDishWindow()
	for (var i = 0; i < dishes.length; i++) {
		
		var dishItemView = new DishItemView(dishes[i], container, model);
		views.push(dishItemView);
		var dishItemController = new DishItemController(dishItemView, model);
		controllers.push(dishItemController);
		

		//new DishItemController(new DishItemView(dishes[i], container, model), model);

		//dishItemController(DishItemView(dishes[i], container, model), model);
		//DishItemView(dishes[i], container, model);
	}
}