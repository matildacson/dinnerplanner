var DishSearchView = function (container, model) { 

	this.searchButton = container.find("#searchButton");
	var controllers = [];
	var views = [];

	var passDishes = function(dishes){

		for (var i = 0; i < dishes.length; i++) {
			var dishItemView = new DishItemView(dishes[i], container.find("#resultedDishes"), model);
			views.push(dishItemView);
			var dishItemController = new DishItemController(dishItemView, model);
			controllers.push(dishItemController);
		};
	};

	var deleteDishes = function(){
	 	container.find("#resultedDishes").html("");
	};

	this.update = function(value){
		deleteDishes();
		var dishes;
		if(value == "All dishes"){
			dishes = model.getAllDishes("starter");
			dishes = dishes.concat(model.getAllDishes("main dish"));
			dishes = dishes.concat(model.getAllDishes("dessert"));
		};
		if(value == "Starter"){
			dishes = model.getAllDishes("starter");
		};
		if(value == "Main Dish"){
			dishes = model.getAllDishes("main dish");
		};
		if(value == "Dessert"){
			dishes = model.getAllDishes("dessert");
		};
		passDishes(dishes);

	 }
}