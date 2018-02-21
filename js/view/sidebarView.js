var SidebarView = function (container, model) {
	
	this.addToObservers = function(){
		model.addObserver(this);
		this.update();
	}
	this.removeFromObservers = function(){
		model.removeObserver(this);
	}

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.createDinnerButton = container.find("#createDinnerButton");

	/**
	* Updates table data for the sidebar.
	*/	
	this.update = function() {
		setNumberOfGuests();
		removeRows();
		addRows(container, model);
	}

	/**
	* Update total total number of guests.
	*/
	function setNumberOfGuests() {
		container.find("#numberOfGuests").html(model.getNumberOfGuests());
	}

	/**
	* Removes all current rows.
	*/
	function removeRows() {
		container.find("#selectedDishes").html("")
	}

	/**
	* Creates rows for the table.
	*/
	function addRows(container, model) {
	
		var allDishes = model.getFullMenu()
		var allDetails = model.getFullDetails();

		for (var i = 0; i < allDishes.length; i++) {
			var dishRowView = new DishRowView(allDishes[i], allDetails[i], container, model);
			var dishRowController = new DishRowController(dishRowView, model);
		}
		var total = model.getTotalMenuPrice();
		container.find("#totalPriceSidebar").html("Total price: "+Math.round(total * 100) / 100+" SEK")
	}
	
}
 