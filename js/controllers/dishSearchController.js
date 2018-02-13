 var DishSearchController = function(view, model ) {

 	
 	var findSelect = function(){
 		var typeSearch = document.getElementById("searchDishType");
 		var typeValue = typeSearch[typeSearch.selectedIndex].value
 		var searchValue = document.getElementById("searchForDish").value;
 		view.update(typeValue, searchValue);
 	};

 	view.searchButton.click(findSelect);
 	/*
 	view.searchButton.click(function(){
 	model.getAllDishes(typeSearch);
 	*/
 /*});*/

}