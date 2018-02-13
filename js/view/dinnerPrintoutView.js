var DinnerPrintoutView = function (container, model) { 
	//add a dish to menu

	function removeDishes(){
		container.html("");
	}

	this.addToObservers = function(){
		model.addObserver(this);
		this.update()
	}
	this.removeFromObservers = function(){
		model.removeObserver(this);
	}

	this.update = function(){
		
		removeDishes();

		// get all dishes in menu
		var dishes = model.getFullMenu();

		// Pass all dishes in menu to getDishWindow()
		for (var i = 0; i < dishes.length; i++) {
			var dishRow = document.createElement("div");
			dishRow.className = "row";
			dishRow.id = "dishRow";
			var imgCol = document.createElement("div");
			imgCol.className = "col-sm-3";
			var summaryCol = document.createElement("div");
			summaryCol.className = "col-sm-6"
			var preparationCol = document.createElement("div");
			preparationCol.className = "col-sm-3";
			container.append(dishRow);
			dishRow.appendChild(imgCol);
			dishRow.appendChild(summaryCol);
			dishRow.appendChild(preparationCol);

			//image
			var img = document.createElement("img");
			img.src = "images/"+dishes[i].image 
			imgCol.appendChild(img);

			//summary
			var summary = dishes[i].name
			summaryCol.innerHTML = summary;

			//preparation
			var preparation = dishes[i].description;
			preparationCol.innerHTML = preparation;
		}


	}

}
