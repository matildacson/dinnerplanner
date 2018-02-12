var TopBarView = function(container, model) {

	var numberOfGuests = container.find("#numberOfGuests");	
	numberOfGuests.html(model.getNumberOfGuests());

	this.update = function(){
		var numberOfGuests = container.find("#numberOfGuests");	
		numberOfGuests.html(model.getNumberOfGuests());
	}

	model.addObserver(this)
}