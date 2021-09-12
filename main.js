var list = document.getElementById("categoryList");
var input = document.getElementById("input");
var button = document.getElementById("button");
var listItem = document.getElementsByTagName("li");

// Add a new task to the list when you click the "+" button
button.addEventListener("click", function(){
	var newTask = document.createElement("li");
	newTask.innerHTML = `<li>${input.value}<span class="remove"><ion-icon class="trash" name="trash"></ion-icon></span><span class="edit"><ion-icon class="create" name="create"></ion-icon></span></li>`;
	if(input.value=="") // Alerts when you add an empty value
		alert("Enter a task");
	else{
		list.appendChild(newTask); 
		input.value="";
	}
	// Marks the task done(line-through) when you click once
	newTask.addEventListener("click", function(){
		newTask.style.textDecoration= "line-through";
		newTask.style.opacity = 0.5;
	})
	// Removes the task form the list when you click twice
	newTask.addEventListener("dblclick", function(){
		list.removeChild(newTask);
	})
})
	
// Add a new task to the list when you press enter key
document.addEventListener("keyup", function(event){
	var newTask = document.createElement("li");
	newTask.innerHTML = `<li>${input.value}<span class="remove"><ion-icon class="trash" name="trash"></ion-icon></span><span class="edit"><ion-icon class="create" name="create"></ion-icon></span></li>`;
	if(event.keyCode==13){
		if(input.value=="")
			alert("Enter a task");
		else{
			list.appendChild(newTask); 
			input.value="";
		}
	}
	newTask.addEventListener("click", function(){
		newTask.style.textDecoration= "line-through";
		newTask.style.opacity = 0.5;
	})
	newTask.addEventListener("dblclick", function(){
		list.removeChild(newTask);
	})
})
//updates the appearance of the "+" button when you hover above it 
button.addEventListener("mouseover", function(){
	button.style.backgroundColor= "#3baaff";
});

button.addEventListener("mouseout", function(){
	button.style.backgroundColor= "#6BBFFF";
});

button.addEventListener("click", function(){
	button.style.backgroundColor= "#0994ff";
});
