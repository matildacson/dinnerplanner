var DishRowController = function(view, model) {

	view.button.addEventListener("click", function() {
		console.log("here")
		model.removeDishFromMenu(view.dishId);

	});
}