var DishItemController = function(view, model, app) {
	
	/**
	* Pass the dish to showDishDetailsPage when the
	* image is clicked.
	*/
	view.img.addEventListener("click", function() {
		app.showDishDetailsPage(view.dish);
	});
}