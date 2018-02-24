var DishDetailsController = function(view, model, app) {
	
 	view.addToMenuButton.click(function(){
 		model.addDishToMenu(view.getDish());
 		app.showSelectDishPage();
 	});

 	 view.backToSearch.click(function(){
 		app.showSelectDishPage();
 	});
}