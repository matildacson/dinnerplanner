var DishDetailsView = function (container, model) {
	var dish = model.getSelectedDish("starter");

	container.find("#nameDiv").html(dish.name);
	container.find("#dishImg").html("<img src='images/"+dish.image+"' img>");
	container.find("#description").html(dish.description);
	container.find("#ingHeader").html("Ingredients for " + model.getNumberOfGuests() + " people");
	var ings = "";
	for (var i = 0; i < dish.ingredients.length; i++) {
		ings += "<p>" + " " + dish.ingredients[i].quantity + 
			" " + dish.ingredients[i].unit +
			" " + dish.ingredients[i].name +
			" SEK" +
			" " + dish.ingredients[i].price + "</p>";
	}
	container.find("#ingredients").html(ings);
	container.find("#totalPrice").html("SEK " + model.getTotalMenuPrice()[1]);
}
 
