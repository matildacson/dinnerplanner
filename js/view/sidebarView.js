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
	//	while (container.find("tr").length > 1) {
	//		container.find("tr:not(:first)").remove()
//		}
//	}
		container.find("#selectedDishes").html("")
		console.log("removing all rows")
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
		container.find(".totalPriceCol").html(Math.round(total * 100) / 100+" SEK")
	}
	
}
 