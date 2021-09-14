var list = document.getElementById("categoryList");
var deleted = document.getElementById("deleted");
var input = document.getElementById("input");
var button = document.getElementById("button");
var listItem = document.getElementsByTagName("li");
var trash = document.getElementsByTagName("span");

// Add a new task to the list when you click the "+" button
button.addEventListener("click", function(){
	var newTask = document.createElement("li");
	newTask.innerHTML = `<li>${input.value}<span onclick="remove()" class="remove"><ion-icon class="trash" name="trash"></ion-icon></span><span class="edit"><ion-icon class="create" name="create"></ion-icon></span></li>`;
	if(input.value=="") // Alerts when you add an empty value
		alert("Enter a task");
	else{
		list.appendChild(newTask); 
		input.value="";
	}/*
	// Marks the task done(line-through) when you click once
	newTask.addEventListener("click", function(){
		newTask.style.textDecoration= "line-through";
		newTask.style.opacity = 0.5;
	})
	// Removes the task form the list when you click twice and stores it in Deleted list
	newTask.addEventListener("dblclick", function(){
		deleted.appendChild(newTask);
		list.removeChild(newTask);
	})*/
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
	}/*
	// Marks the task done(line-through) when you click once
	newTask.addEventListener("click", function(){
		newTask.style.textDecoration= "line-through";
		newTask.style.opacity = 0.5;
	})
	// Removes the task form the list when you click twice and stores it in Deleted list
	newTask.addEventListener("dblclick", function(){
		deleted.appendChild(newTask);
		list.removeChild(newTask);
	})*/
})
//updates the appearance of the "+" button when you hover above it 
button.addEventListener("mouseover", function(){
	button.style.backgroundColor= "#404040";
});

button.addEventListener("mouseout", function(){
	button.style.backgroundColor= "#737373";
});

button.addEventListener("click", function(){
	button.style.backgroundColor= "#262626";
});