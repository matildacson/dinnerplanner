$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	var listener = function () {
	 	$('#sidebarView').show();
	 	$('#dishSearchView').show();
	 	$('#dishItemView').show();
	 	$('#indexView').hide();
	};

//	var indexView = new IndexView($("#indexView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishSearchView = new DishSearchView($("#dishSearchView"), model);

//	$('#indexView').show();
	$('#sidebarView').hide();
	$('#dishSearchView').hide();
	$('#dishItemView').hide();

	var btn = document.getElementById("createDinnerButton");
	btn.addEventListener("click", listener, false);


	
	// And create the instance of ExampleView

	/**if($("#allOfDishDetails").length){
		var sidebarView = new SidebarView($("#sidebarView"), model);
		var dishDetailsView= new DishDetailsView($("#dishDetailsView"), model);
		$('#sidebarView').hide();
	 	$('#dishDetailsView').hide();
	}

	if($("#allOfDinnerOverview").length){
		var topBarView = new TopBarView($("#topBarView"), model);
		var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	}

	if($("#allOfSelectDish").length){
		var sidebarView = new SidebarView($("#sidebarView"), model);
		var dishSearchView = new DishSearchView($("#dishSearchView"), model)
	}

	if($("#allOfDinnerPrintout").length){
		var topBarView = new TopBarView($("#topBarView"), model);
		var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"), model);
	}


	if($("#allOfIndex").length){
		var indexView = new IndexView($("#indexView"), model);

	}/*
//	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */


});