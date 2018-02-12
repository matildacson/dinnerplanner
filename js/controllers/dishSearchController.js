//ExampleViewController Object constructor
 var DishSearchController = function(view, model ) {

 	
 	var findSelect = function(){
 		var typeSearch = document.getElementById("searchDishType");
 		var value = typeSearch[typeSearch.selectedIndex].value
 		view.update(value);
 	};


 	view.searchButton.click(findSelect);
 	/*
 	view.searchButton.click(function(){
 	model.getAllDishes(typeSearch);
 	*/
 /*});*/

}