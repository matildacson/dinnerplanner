var DishDetailsController = function(view, view2, model) {
	
	view.goBackButton.click(function(){
 		showSelectDishPage();
 		view2.update("All dishes");
 	});
}