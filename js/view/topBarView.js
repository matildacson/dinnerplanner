var TopBarView = function(container, model) {
	var leftCol = document.createElement("div");
	container.append(leftCol);
	leftCol.className = "col-sm-6";
	var text = document.createElement("h2");
	leftCol.appendChild(text);
	text.innerHTML = "My dinner: " + model.getNumberOfGuests() + " guests.";

	var rightCol = document.createElement("div");
	container.append(rightCol);
	rightCol.className = "col-sm-6 text-right";
	var link = document.createElement("a");
	link.href = "select_dish.html";
	rightCol.appendChild(link);
	var button = document.createElement("button");
	button.type = "button";
	button.className = "btn btn-primary";
	button.innerHTML = "Go back and edit menu";
	link.appendChild(button);

	//var getNumberOfGuests = container.find("#numberOfGuests");
	//getNumberOfGuests.html(model.getNumberOfGuests());
}