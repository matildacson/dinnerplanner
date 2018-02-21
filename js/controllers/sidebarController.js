//ExampleViewController Object constructor
 var SidebarController = function(view, model) {

 	var dishRows = view.rows;

 	view.plusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});

 	view.minusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});

 	view.createDinnerButton.click(function(){
 		showDinnerOverviewPage();
 	});
 }