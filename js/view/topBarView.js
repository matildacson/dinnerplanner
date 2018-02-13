var TopBarView = function(container, model) {

	this.addToObservers = function(){
		model.addObserver(this);
		this.update()
	}
	this.removeFromObservers = function(){
		model.removeObserver(this);
	}

	this.editDinnerButton = container.find("#editDinnerButton");

	var numberOfGuests = container.find("#numberOfGuests");	
	numberOfGuests.html(model.getNumberOfGuests());

	this.update = function(){
		var numberOfGuests = container.find("#numberOfGuests");	
		numberOfGuests.html(model.getNumberOfGuests());
	}
}