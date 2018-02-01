
var SidebarView = function (container, model) {

	//Number of guests
	var numberOfGuests = container.find("#numberOfGuests");
	//model.setNumberOfGuests(1);
	numberOfGuests.html(model.getNumberOfGuests());

	//add dish to menu
	model.addDishToMenu(1);

	// var variable for total price of the menu
	var totalPrice = 0
	
	var menuDishes = model.getFullMenu()
	var selectedDishes = container.find("#selectedDishes");
	for(var i = 0; i < menuDishes.length; i++) {
		var dish = document.createElement("tr");
		var dishName = document.createElement("td");
		var priceCurrency = document.createElement("td")
		var dishPrice = document.createElement("td");
		selectedDishes.append(dish);
		dish.appendChild(dishName);
		dish.appendChild(priceCurrency)
		dish.appendChild(dishPrice); 
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
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */

	
}
 