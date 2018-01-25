
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
	for(var i = 0; i < menuDishes.length; i++) {
		var selectedDishes = document.getElementById("selectedDishes");
		var dish = document.createElement("div");
		var dishName = document.createElement("div");
		var dishPrice = document.createElement("div");
		dish.className = "row";
		dishName.className = "col-sm-6";
		dishPrice.className = "col-sm-6";
		dishName.id = "dishName";
		dishPrice.id = "dishId";
		selectedDishes.appendChild(dish);
		dish.appendChild(dishName);
		dish.appendChild(dishPrice); 
		dishName.innerHTML = menuDishes[i].name;
		dishPrice.innerHTML = model.getTotalMenuPrice()[i];
		totalPrice += model.getTotalMenuPrice()[i]
		};

		var totalDishCost = container.find("#totalDishCost")
		totalDishCost.html("SEK: "+totalPrice);



	
	

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
 