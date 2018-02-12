var DinnerOverviewView = function (container, model) { 
	//add a dish to menu
	//model.addDishToMenu(1);

	// get all dishes in menu
	var dishes = model.getFullMenu();

	// Pass all dishes in menu to getDishWindow()
	for (var i = 0; i < dishes.length; i++) {
		DishItemView((dishes[i]), container, model);
	}

}