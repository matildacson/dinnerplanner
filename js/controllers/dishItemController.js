var dishItemController = function(view, model) {

	view.img.click(function() {
		showDishDetailsPage(view.dish);
	});
	
	/*
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});
	*/
}