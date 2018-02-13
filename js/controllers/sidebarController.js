//ExampleViewController Object constructor
 var SidebarController = function(view, model) {
 	
 	view.plusButton.click(function(){
 		console.log("plus 1");
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});

 	view.minusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});

 	view.createDinnerButton.click(function(){
 		showDinnerOverviewPage();
 	});
 }