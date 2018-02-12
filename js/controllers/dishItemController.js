var DishItemController = function(view, model) {

	
	console.log(view);

	view.img.addEventListener("click", function() {
		showDishDetailsPage(view.dish);
	});
	/*
	view.img.click(function() {

		addEventListener("click", showDishDetailsPage(view.dish), false)
		showDishDetailsPage(view.dish);
	});
	*/
	
	
	/*
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});
	*/
}