//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

	var selectedDishes = [];
	var selectedDishesDetails = [];
	var numGuests = 4;
	var observers = [];


	this.setNumberOfGuests = function(num) {
		if (num >=0){
			numGuests = num;
			notifyObservers();
		}

	}
	
	this.getNumberOfGuests = function() {
		//TODO Lab 1
		return numGuests
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		//TODO Lab 1
		for (var i = 0; i < selectedDishes.length; i++) {
			if(this.getDish(selectedDishes[i]).type == type) {
				return this.getDish(selectedDishes[i]);
			}
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return selectedDishes;
	}

	this.getFullDetails = function() {
		return selectedDishesDetails;

	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 1
		var menu = this.getFullMenu()
		var ingredients = []
		for(var i = 0; i < menu.length; i++){
			ingredients.push(menu[i].ingredients);
		}
		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests)
	this.getTotalMenuPrice = function() {
		totalCost = 0;
		for(var i = 0; i < selectedDishesDetails.length; i++) {
			totalCost += selectedDishesDetails[i].pricePerServing;
		} 
		return totalCost* this.getNumberOfGuests();		
	}

	//Adds the passed dish to the menu. 
	this.addDishToMenu = function(dish) {
		if (!selectedDishes.some(d => d.id == dish.id)) {
			this.getDishDetails(dish.id, function(details){
			selectedDishesDetails.push(details)
			selectedDishes.push(dish);
			notifyObservers();});
		}
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for(var i = 0; i < selectedDishes.length; i++) {
			if(selectedDishes[i].id == id){
				selectedDishes.splice(i, 1);
				selectedDishesDetails.splice(i, 1);
				notifyObservers();
			}
		}
	}

	this.getAllDishes = function (type, searchValue, callback, errorCallback) {
		var urlQuery = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type="+type+"&number=100&query="+searchValue;

		$.ajax( {
		   url: urlQuery,
		   headers: {
		     'X-Mashape-Key': "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB",
		   },
		   success: function(data) {
		     callback(data)
		   },
		   error: function(error) {
		     errorCallback(error)
		   }

		}) 
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}

	this.getDishDetails = function (id, callback, errorCallback) {
		var urlQuery = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+id+"/information";

		$.ajax( {
		   url: urlQuery,
		   headers: {
		     'X-Mashape-Key': "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB",
		   },
		   success: function(data) {
		     callback(data)
		   },
		   error: function(error) {
		     errorCallback(error)
		   }

		}) 
	}


	this.ifExists = function(observer){
		for(var i =0; i < observers.length; i++){
			if (observers[i] == observer){
				return true
			}
		}
		return false;
	}

	this.addObserver = function(observer){
		if(!this.ifExists(observer)){
			observers.push(observer);
		};

	};

	this.removeObserver = function(observer){
		for(var i =0; i < observers.length; i++ ){
			if(observers[i] == observer){
				observers.splice(i, 1)
			}
		}
	}

	var notifyObservers = function(){
		for(var i =0; i < observers.length; i++){
			observers[i].update()

		}
	}
	
}
