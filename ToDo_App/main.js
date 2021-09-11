var list = document.getElementById("categoryList");
var input = document.getElementById("input");
var button = document.getElementById("button");

button.addEventListener("click", function(){
	var newTask = document.createElement("li");
	newTask.innerHTML = input.value;
	if(input!=""){
		list.appendChild(newTask); 
		input.value="";
	}
	else
		;
});

button.addEventListener("mouseover", function(){
	button.style.backgroundColor= "#3baaff";
});

button.addEventListener("mouseout", function(){
	button.style.backgroundColor= "#6BBFFF";
});

button.addEventListener("click", function(){
	button.style.backgroundColor= "#0894ff";
});