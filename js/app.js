$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishSearchView = new DishSearchView($("#dishSearchView"), model, this);
	var dishDetailsView= new DishDetailsView($("#dishDetailsView"), model);
	var topBarView = new TopBarView($("#topBarView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"), model);
	var totalPriceView = new TotalPriceView($("#totalPriceView"), model);

	// Index page
	hideAll();
	$('#indexView').show();
	
	// Select dish page
	this.showSelectDishPage = function () {
		hideAll();
	 	$('#sidebarView').show();
	 	$('#dishSearchView').show();
	 	$('#dishItemView').show();
	 	dishDetailsView.removeFromObservers();
		topBarView.removeFromObservers();
		totalPriceView.removeFromObservers();
		sidebarView.addToObservers();
	};

	this.showDinnerOverviewPage = function () {
		hideAll();
	 	$('#dinnerOverviewView').show();
	 	$('#topBarView').show();
		$('#totalPriceView').show();
		sidebarView.removeFromObservers();
		topBarView.addToObservers();
		totalPriceView.addToObservers();
		dinnerOverviewView.addToObservers();
	};

	this.showDishDetailsPage = function (dish) {
		hideAll();
	 	$('#dishDetailsView').show();
	 	$('#sidebarView').show();
		dishDetailsView.createPage(dish);
		dishDetailsView.addToObservers();
	};

	this.showDinnerPrintoutPage = function () {
		hideAll();
	 	$('#dinnerPrintoutView').show();
	 	$('#topBarView').show();
	 	dinnerPrintoutView.addToObservers();
	};

	function hideAll() {
		$('#sidebarView').hide();
		$('#dishSearchView').hide();
		$('#dishItemView').hide();
		$('#indexView').hide();
		$('#dinnerOverviewView').hide();
		$('#dinnerPrintoutView').hide();
		$('#dishDetailsView').hide();
		$('#topBarView').hide();
		$('#totalPriceView').hide();
	}

	//Index view
	document.getElementById("beginButton").addEventListener("click", this.showSelectDishPage, false);

	//Controllers
	var sidebarController = new SidebarController(sidebarView, model, this)
	var totalPriceController = new TotalPriceController(totalPriceView, model, this);
	var overviewController = new OverviewController(dinnerOverviewView, model, this);
	var topbarController = new TopbarController(topBarView, model, this);
	var dishDetailsController = new DishDetailsController(dishDetailsView, model, this);
	var dishSearchController = new DishSearchController(dishSearchView, model, this);


});