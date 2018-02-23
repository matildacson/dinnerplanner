var DishSearchView = function (container, model) { 

	this.searchButton = container.find("#searchButton");
	this.dropdownValue = container.find("#searchDishType");
	this.searchValue = container.find("#searchForDish");
	var loading = container.find("#loading");

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
		loading.attr("style", "display: block");

		model.getAllDishes(typeValue.toLowerCase(), searchValue, function(dishes){
			loading.attr("style", "display: none");
			passDishes(dishes.results);

		}, function(){
			loading.attr("style", "display: none");
			window.alert("Something went terribubbably wrong...")
		});

	}
}