$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishSearchView = new DishSearchView($("#dishSearchView"), model);
	var dishDetailsView= new DishDetailsView($("#dishDetailsView"), model);
	var topBarView = new TopBarView($("#topBarView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"), model);

	document.getElementById("createDinnerButton").addEventListener("click", showSelectDishPage, false);
	document.getElementById("createDinnerButton").addEventListener("click", showSelectDishPage, false);

	// Index view
	$('#sidebarView').hide();
	$('#dishSearchView').hide();
	$('#dishItemView').hide();
	$('#indexView').show();
	$('#dinnerOverviewView').hide();
	$('#dinnerPrintoutView').hide();
	$('#dishDetailsView').hide();
	$('#topBarView').hide();

	var showSelectDishPage = function () {
	 	$('#sidebarView').show();
	 	$('#dishSearchView').show();
	 	$('#dishItemView').show();
	 	$('#indexView').hide();
	 	$('#dinnerOverviewView').hide();
	 	$('#dinnerPrintoutView').hide();
	 	$('#dishDetailsView').hide();
	 	$('#topBarView').hide();
	};

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */


});