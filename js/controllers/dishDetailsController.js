var DishDetailsController = function(view, view2, model) {
	
	view.goBackButton.click(function(){
 		showSelectDishPage();
 		view2.update("All dishes");
 	});

 	view.addToMenuButton.click(function(){
 		model.addDishToMenu(view.dish.id);
 		showSelectDishPage();
 	});
}