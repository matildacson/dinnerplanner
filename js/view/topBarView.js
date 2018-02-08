var TopBarView = function(container, model) {

	var numberOfGuests = container.find("#numberOfGuests");	
	numberOfGuests.html(model.getNumberOfGuests());

}