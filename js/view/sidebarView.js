var SidebarView = function (container, model) {
	


	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	// Let this view observe the model.
	model.addObserver(this);

	/**
	* Updates table data for the sidebar.
	*/	
	this.update = function() {
		setNumberOfGuests();
		removeRows();
		addRows();
	}

	// Initialize the sidebar.
	this.update();

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
		while (container.find("tr").length > 1) {
			container.find("tr:not(:first)").remove()
		}
	}

	/**
	* Creates rows for the table.
	*/
	function addRows() {
		div = container.find("#selectedDishes");
		var allDishes = model.getFullMenu()
		var allPrices = model.getTotalMenuPrice();

		for (var i = 0; i < allDishes.length; i++) {
			div.append(createRow(allDishes[i], allPrices[i]));
		}
		div.append(createLastRow());
	}

	/**
	* Returns a row made from the passed object.
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
	* Returns the final row of the table.
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
 