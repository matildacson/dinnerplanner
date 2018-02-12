var DishItemController = function(view, model) {
	
	view.img.addEventListener("click", function() {
		showDishDetailsPage(view.dish);
	});
}