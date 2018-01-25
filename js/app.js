$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView

	if($("#allOfDishDetails").length){
		var sidebarView = new SidebarView($("#sidebarView"), model);
		var dishDetailsView= new DishDetailsView($("#dishDetailsView"), model);
	}

	if($("#allOfDinnerOverview").length){
		var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	}

	if($("#allOfSelectDish").length){
		var sidebarView = new SidebarView($("#sidebarView"), model);
		var dishItemView = new DishItemView($("#dishItemView"), model);
	}
//	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});