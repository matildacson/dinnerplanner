var TopBarView = function(container, model) {

	var numberOfGuests = container.find("#numberOfGuests");	
	numberOfGuests.html(model.getNumberOfGuests());
	//var getNumberOfGuests = container.find("#numberOfGuests");
	//getNumberOfGuests.html(model.getNumberOfGuests());
}