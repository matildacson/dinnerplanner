var DishDetailsView = function (container, model) {
	
	model.addDishToMenu(1);
	dish = model.getSelectedDish("starter");
	model.setNumberOfGuests(10);

	// Get dishDetailsView and add a row to it
	var dishDetails = document.getElementById("dishDetailsView");
	var row = document.createElement("div");
	row.className = "row";
	dishDetails.appendChild(row);

	// Create two columns dishCol and ingredCol and add to the row
	var dishCol = document.createElement("div");
	dishCol.className = "col-sm-6";
	var ingredCol = document.createElement("div");
	ingredCol.className = "col-sm-6";
	row.appendChild(dishCol);
	row.appendChild(ingredCol);
	
	// Add dish name to dishCol
	var dishName = document.createElement("h1");
	dishName.innerHTML = dish.name;
	dishCol.appendChild(dishName);

	// Add dish image to dishCol
	var dishImg = document.createElement("img")
	dishImg.src = "images/"+dish.image;
	dishCol.appendChild(dishImg);

	// Add dish description to dishCol
	var description = document.createElement("p");
	description.innerHTML = dish.description;
	dishCol.appendChild(description);

	// Add button to dishCol
	var backButton = document.createElement("button");
	backButton.type = "button";
	backButton.className = "btn btn-primary";
	backButton.innerHTML = "Back to search";
	dishCol.appendChild(backButton);

	// Add three rows to ingredCol
	row1 = document.createElement("div");
	row2 = document.createElement("div");
	row3 = document.createElement("div");
	row1.className = "row";
	row2.className = "row";
	row3.className = "row";
	ingredCol.appendChild(row1);
	ingredCol.appendChild(row2);
	ingredCol.appendChild(row3);

	// Add header text row1
	var headerText = document.createElement("h2");
	headerText.innerHTML = "Ingredienser för " + model.getNumberOfGuests() + " personer";
	row1.appendChild(headerText);

	// Add ingredients row2

	// Add button to the left on row3
	var buttonCol = document.createElement("div");
	buttonCol.className = "col-sm-6";
	row3.appendChild(buttonCol);
	var addButton = document.createElement("button");
	addButton.type = "button";
	addButton.className = "btn btn-primary";
	addButton.innerHTML = "Add to menu";
	buttonCol.appendChild(addButton);

	// Add total cost to the right row3
	var costCol = document.createElement("div");
	costCol.className = "col-sm-6";
	row3.appendChild(costCol);
	var price = document.createElement("p");
	costCol.innerHTML = model.getTotalMenuPrice()[0];

	// Add preparations
	var prepRow = document.createElement("div");
	dishDetails.appendChild(prepRow);
	var prepText = document.createElement("h1");
	prepText.innerHTML = "Preparations";
	prepRow.appendChild(prepText);









}
 
