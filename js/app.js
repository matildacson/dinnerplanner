$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishSearchView = new DishSearchView($("#dishSearchView"), model);
	var dishDetailsView= new DishDetailsView(model.getDish(1), $("#dishDetailsView"), model);
	var topBarView = new TopBarView($("#topBarView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"), model);


	// Index page
	$('#sidebarView').hide();
	$('#dishSearchView').hide();
	$('#dishItemView').hide();
	$('#indexView').show();
	$('#dinnerOverviewView').hide();
	$('#dinnerPrintoutView').hide();
	$('#dishDetailsView').hide();
	$('#topBarView').hide();

	// Select dish page
	showSelectDishPage = function () {
	 	$('#sidebarView').show();
	 	$('#dishSearchView').show();
	 	$('#dishItemView').show();
	 	$('#indexView').hide();
	 	$('#dinnerOverviewView').hide();
	 	$('#dinnerPrintoutView').hide();
	 	$('#dishDetailsView').hide();
	 	$('#topBarView').hide();
	};

	var showDinnerOverviewPage = function () {
	 	$('#sidebarView').hide();
	 	$('#dishSearchView').hide();
	 	$('#dishItemView').hide();
	 	$('#indexView').hide();
	 	$('#dinnerOverviewView').show();
	 	$('#dinnerPrintoutView').hide();
	 	$('#dishDetailsView').hide();
	 	$('#topBarView').show();
	};

	showDishDetailsPage = function (dish) {
		dishDetailsView.update(dish);
	 	$('#sidebarView').show();
	 	$('#dishSearchView').hide();
	 	$('#dishItemView').hide();
	 	$('#indexView').hide();
	 	$('#dinnerOverviewView').hide();
	 	$('#dinnerPrintoutView').hide();
	 	$('#dishDetailsView').show();
	 	$('#topBarView').hide();
	};
//	model.addObserver(sidebarView);

	//Index view
	document.getElementById("createDinnerButton").addEventListener("click", showSelectDishPage, false);

	//Controllers
	var sidebarController = new SidebarController(sidebarView, model)
	document.getElementById("sidebarButton").addEventListener("click", showDinnerOverviewPage, false);

	//Overview view
	document.getElementById("backButton").addEventListener("click", showSelectDishPage, false);

	//Dish Details view
	var dishDetailsController = new DishDetailsController(dishDetailsView, model);
	//document.getElementById("dishImg").addEventListener("click", showDishDetailsPage, false);

	//var selectedType = container.getElementById("searchDishType").option.selected="selected".innerHTML
	//this.searchButton = container.find("#searchButton");
	//this.searchButton.click(function() {model.getSelectedDishes(selectedType) } );

	//Dish details view
//	document.getElementById("backButton").addEventListener("click", showDishDetailsPage, false);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */


});