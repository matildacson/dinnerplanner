var SelectDishView = function (container, model) {


	
	var dish = model.getDish(1);
	var name = dish.name;
	
	var div = document.createElement('div');

	var img = document.createElement("img");
	img.src = "images/"+dish.image;
	var src = document.getElementById("selectDishView");
	src.appendChild(div);
	div.appendChild(img);

	var p = document.createElement("p");
	p.innerHTML = name;
	div.appendChild(p);


	
}
 
