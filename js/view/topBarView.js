var TopBarView = function(container, model) {

	this.addToObservers = function(){
		model.addObserver(this);
		this.update()
	}
	this.removeFromObservers = function(){
		model.removeObserver(this);
	}

	var numberOfGuests = container.find("#numberOfGuests");	
	numberOfGuests.html(model.getNumberOfGuests());

	this.update = function(){
		var numberOfGuests = container.find("#numberOfGuests");	
		numberOfGuests.html(model.getNumberOfGuests());
	}
}