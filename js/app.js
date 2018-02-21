$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishSearchView = new DishSearchView($("#dishSearchView"), model);
	var dishDetailsView= new DishDetailsView($("#dishDetailsView"), model);
	var topBarView = new TopBarView($("#topBarView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"), model);
	var totalPriceView = new TotalPriceView($("#totalPriceView"), model);

	// Index page
	$('#sidebarView').hide();
	$('#dishSearchView').hide();
	$('#dishItemView').hide();
	$('#indexView').show();
	$('#dinnerOverviewView').hide();
	$('#dinnerPrintoutView').hide();
	$('#dishDetailsView').hide();
	$('#topBarView').hide();
	$('#totalPriceView').hide();

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
	 	$('#totalPriceView').hide();
	 	dishDetailsView.removeFromObservers();
		topBarView.removeFromObservers();
		totalPriceView.removeFromObservers();
		sidebarView.addToObservers();
	};

	showDinnerOverviewPage = function () {
	 	$('#sidebarView').hide();
	 	$('#dishSearchView').hide();
	 	$('#dishItemView').hide();
	 	$('#indexView').hide();
	 	$('#dinnerOverviewView').show();
	 	$('#dinnerPrintoutView').hide();
	 	$('#dishDetailsView').hide();
	 	$('#topBarView').show();
		$('#totalPriceView').show();
		sidebarView.removeFromObservers();
		topBarView.addToObservers();
		totalPriceView.addToObservers();
		dinnerOverviewView.addToObservers();
	};

	showDishDetailsPage = function (dish) {
	 	$('#dishSearchView').hide();
	 	$('#dishItemView').hide();
	 	$('#indexView').hide();
	 	$('#dinnerOverviewView').hide();
	 	$('#dinnerPrintoutView').hide();
	 	$('#dishDetailsView').show();
	 	$('#topBarView').hide();
		dishDetailsView.createPage(dish);
		dishDetailsView.addToObservers();
	};

	showDinnerPrintoutPage = function () {
	 	$('#dinnerOverviewView').hide();
	 	$('#dinnerPrintoutView').show();
	 	$('#topBarView').show();
	 	$('#totalPriceView').hide();
	 	dinnerPrintoutView.addToObservers();
	};

	//Index view
	document.getElementById("beginButton").addEventListener("click", showSelectDishPage, false);

	//Controllers
	var sidebarController = new SidebarController(sidebarView, model)
	var totalPriceController = new TotalPriceController(totalPriceView, model);
	var overviewController = new OverviewController(dinnerOverviewView, model);
	var topbarController = new TopbarController(topBarView, model);
	var dishDetailsController = new DishDetailsController(dishDetailsView, model);
	var dishSearchController = new DishSearchController(dishSearchView, model);


/* 	$(document).ajaxStart(function(){
 		console.log("hello")
 		$('#loading').show()
 	})

 	$(document).ajaxComplete(function(){
 		$('#loading').hide()
 	})*/


});