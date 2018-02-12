var DishSearchView = function (container, model) { 

	var dishes = model.getAllDishes("starter");
	var controllers = []
	var views = []

	// Pass all dishes in "dishes" to getDishWindow()
	for (var i = 0; i < dishes.length; i++) {
		var dishItemView = new DishItemView(dishes[i], container, model);
		views.push(dishItemView);
		var dishItemController = new DishItemController(dishItemView, model);
		controllers.push(dishItemController);
	}
}