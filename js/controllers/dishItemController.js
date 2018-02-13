var DishItemController = function(view, model) {
	
	/**
	* Pass the dish to showDishDetailsPage when the
	* image is clicked.
	*/
	view.img.addEventListener("click", function() {
		showDishDetailsPage(view.dish);
	});
}