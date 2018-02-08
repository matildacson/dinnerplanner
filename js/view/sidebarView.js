var SidebarView = function (container, model) {

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

	//this.update()
/**	this.update = function (){
		var numberOfGuests = container.find("#numberOfGuests");
		numberOfGuests.html(model.getNumberOfGuests());
		var newTotalPrice = 0
		for (var i = 0; i < prices.length; i++){
			prices[i].innerHTML = model.getTotalMenuPrice()[i];
			newTotalPrice += model.getTotalMenuPrice()[i]
		}
		totalMenuCost.innerHTML = newTotalPrice;
	}*/
	
	model.addObserver(this);

	// Add guest
	this.plusButton = container.find("#plusGuest");
	//this.plusButton.click(function() {model.setNumberOfGuests(model.getNumberOfGuests() + 1) } );

	//Remove quest
	this.minusButton = container.find("#minusGuest");
//	this.minusButton.click(function() {model.setNumberOfGuests(model.getNumberOfGuests() - 1) } );
	
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
 