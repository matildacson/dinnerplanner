 var DishSearchController = function(view, model ) {

 	
 	var findSelect = function(){
 	//	var typeSearch = document.getElementById("searchDishType");
 	//	var typeValue = typeSearch[typeSearch.selectedIndex].value
 		var searchValue = view.searchValue.val();
 		var dropValue = view.dropdownValue.val();
 		view.update(dropValue, searchValue);
 	};

 	view.searchButton.click(findSelect);


}