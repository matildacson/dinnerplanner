//ExampleViewController Object constructor
 var DishSearchController = function(view, model ) {

 var typeSearch = document.getElementById("searchDishType").innerHTML;

 view.searchButton.click(function(){
 model.getAllDishes(typeSearch);
 });

}