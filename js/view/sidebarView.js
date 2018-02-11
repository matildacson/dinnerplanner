var SidebarView = function (container, model) {
	var selectedDishes = container.find("#selectedDishes");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	// Add this view as an observer to the model.
	model.addObserver(this);

	/**
	* Creates new table data for the sidebar.
	*/	
	this.update = function() {
		setNumberOfGuests();
		removeRows();
		addRows();
	}

	// Initialize the sidebar.
	this.update();

	/**
	* Removes all current rows.
	*/
	function removeRows() {
		while (selectedDishes.find("tr").length > 1) {
			selectedDishes.find("tr:not(:first)").remove()
		}
	}

	/**
	* Creates rows for the table.
	*/
	function addRows() {
		var allDishes = model.getFullMenu()
		var allPrices = model.getTotalMenuPrice();

		for (var i = 0; i < allDishes.length; i++) {
			selectedDishes.append(createRow(allDishes[i], allPrices[i]));
		}
		selectedDishes.append(createLastRow());
	}

	/**
	* Returns a row to the made from passed dish.
	*/
	function createRow(object, price) {
		var dish = document.createElement("tr");
		var dishName = document.createElement("td");
		var priceCurrency = document.createElement("td")
		var dishPrice = document.createElement("td");
		dish.appendChild(dishName);
		dish.appendChild(priceCurrency)
		dish.appendChild(dishPrice); 
		dishName.innerHTML = object.name;
		dishPrice.innerHTML = price;
		priceCurrency.innerHTML = "SEK";
		return dish;
	}

	/**
	* Returns the final row to the table.
	*/
	function createLastRow() {
		var totalPriceRow = document.createElement("tr");	
		var total = document.createElement("td")
		var currency = document.createElement("td");
		var totalMenuCost = document.createElement("td");
		totalPriceRow.appendChild(total);
		totalPriceRow.appendChild(currency);
		totalPriceRow.appendChild(totalMenuCost);
		totalMenuCost.innerHTML = getTotalPrice(model);
		currency.innerHTML = "SEK";
		total.innerHTML = "TOTAL:";
		return totalPriceRow;
	}

	/**
	* Returns the total price for the menu.
	*/
	function getTotalPrice() {
		var allPrices = model.getTotalMenuPrice();
		var totalPrice = 0;
		for (var i = 0; i < allPrices.length; i++) {
			totalPrice += allPrices[i];
		}
		return totalPrice;
	}

	/**
	* Update total total number of guests.
	*/
	function setNumberOfGuests() {
		container.find("#numberOfGuests").html(model.getNumberOfGuests());
	}

	/*
	this.update = function(){	
		//Number of guests
		var numberOfGuests = container.find("#numberOfGuests");
		//model.setNumberOfGuests(1);
		numberOfGuests.html(model.getNumberOfGuests());


		// var variable for total price of the menu
		var totalPrice = 0
		
		var menuDishes = model.getFullMenu()
		var selectedDishes = container.find("#selectedDishes");
		var prices = [];
		for(var i = 0; i < menuDishes.length; i++) {
			var dish = document.createElement("tr");
			var dishName = document.createElement("td");
			var priceCurrency = document.createElement("td")
			var dishPrice = document.createElement("td");
			selectedDishes.append(dish);
			dish.appendChild(dishName);
			dish.appendChild(priceCurrency)
			dish.appendChild(dishPrice); 
			prices.push(dishPrice);
			dishName.innerHTML = menuDishes[i].name;
			dishPrice.innerHTML = model.getTotalMenuPrice()[i];
			priceCurrency.innerHTML = "SEK";
			totalPrice += model.getTotalMenuPrice()[i]
			};

		var totalPriceRow = document.createElement("tr");	
		var total = document.createElement("td")
		var currency = document.createElement("td");
		var totalMenuCost = document.createElement("td");
		selectedDishes.append(totalPriceRow);
		totalPriceRow.appendChild(total);
		totalPriceRow.appendChild(currency);
		totalPriceRow.appendChild(totalMenuCost);
		totalMenuCost.innerHTML = totalPrice;
		currency.innerHTML = "SEK";
		total.innerHTML = "TOTAL:"
	}
	
	
	model.addObserver(this);

	// Add guest
	this.plusButton = container.find("#plusGuest");

	//Remove quest
	this.minusButton = container.find("#minusGuest");
	*/
	/**
	 * When we want references to some view elements to be available from outside of view, we 
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it 
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 * 
	 * We can then, in some other code, use exampleView.plusButton to reference the 
	 * this button and do something with it (see Lab 2).
	 * 
	 */
	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */

	
}
 