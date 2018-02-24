 var DishSearchController = function(view, model) {

 	
 	var findSelect = function(){
 		var searchValue = view.searchValue.val();
 		var dropValue = view.dropdownValue.val();
 		view.update(dropValue, searchValue);
 	};

 	view.searchButton.click(findSelect);


}