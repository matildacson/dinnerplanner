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
		var details = model.getFullDetails();

		for (var i = 0; i < dishes.length; i++) {
			var dishRow = document.createElement("div");
			dishRow.className = "row";
			dishRow.id = "dishRow";
			var titleImgCol = document.createElement("div");
			titleImgCol.className = "col-sm-4";
			var preparationsCol = document.createElement("div");
			preparationsCol.className = "col-sm-8"
			preparationsCol.id = "instructionsPrintout"
			container.append(dishRow);
			dishRow.appendChild(titleImgCol);
			dishRow.appendChild(preparationsCol);

			//image
			var imgDiv = document.createElement("div");
			imgDiv.id = "imgDivPrintout"
			var img = document.createElement("img");
			img.src = "https://spoonacular.com/recipeImages/"+dishes[i].image 
			img.id = "dishImgPrintout"
			titleImgCol.append(imgDiv);
			imgDiv.append(img)

			//title
			var titleDiv = document.createElement("div");
			titleDiv.id = "dishTitle";
			var title = dishes[i].title;
			titleDiv.innerHTML = title
			titleImgCol.append(titleDiv);

			//preparation
			var preparation = details[i].instructions
			preparationsCol.innerHTML = preparation;
		}


	}

}
