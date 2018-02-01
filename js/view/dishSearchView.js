var DishSearchView = function (container, model) { 
	// Add all starters to "dishes"
	var dishes = model.getAllDishes("starter");

	// Pass all dishes in "dishes" to getDishWindow()
	for (var i = 0; i < dishes.length; i++) {
		DishItemView(dishes[i], container, model);
	}
}