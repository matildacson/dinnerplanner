var DishDetailsController = function(view, model) {
	
	view.goBackButton.click(function(){
 		showSelectDishPage();
 	});

 	view.addToMenuButton.click(function(){
 		model.addDishToMenu(view.getDish().id);
 		showSelectDishPage();
 	});
}