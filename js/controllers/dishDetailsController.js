var DishDetailsController = function(view, model) {
	
 	view.addToMenuButton.click(function(){
 		model.addDishToMenu(view.getDish());
 		showSelectDishPage();
 	});

 	 view.backToSearch.click(function(){
 		showSelectDishPage();
 	});
}