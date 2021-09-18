var list = document.getElementById("taskList");
var deleted = document.getElementById("deleted");
var input = document.getElementById("input");
var button = document.getElementById("button");

//FUNCTIONS
function addTask(){
	//create a new div to store checkbox, li, edit button, and remove button
	var newTask = document.createElement("div");
	newTask.innerHTML =`<input class="checkStatus" type="Checkbox" name="" >`;
	//create new li to store the input value and append it to the newTask div
	var item = document.createElement("li");
	item.innerHTML = `${input.value}`;
	newTask.appendChild(item);
	//create span tag to store the edit icon and append it to the li tag
	var editButton = document.createElement("span");
	editButton.innerHTML = `<i class="fa fa-pencil create" aria-hidden="true"></i>`;
	editButton.classList.add("edit");
	item.appendChild(editButton);
	//create span tag to store the remove icon and append it to the li tag
	var trashButton = document.createElement("span");
	trashButton.innerHTML = `<i class="fa fa-trash trash" aria-hidden="true"></i>`;
	trashButton.classList.add("remove");
	item.appendChild(trashButton);

	if(input.value=="") // Alerts when you add an empty value
		alert("Enter a task");
	else{ // Adds the input value to the list
		list.appendChild(newTask); 
		input.value="";	
	}
	// Marks the task done(line-through) when you click once
	newTask.addEventListener("click", function(){

	})
	// Removes the task form the list when you click twice and stores it in Deleted list
	newTask.addEventListener("dblclick", function(){
		deleted.appendChild(newTask);
		list.removeChild(newTask);
	})
}

function deleteItem(e) { 
  var item = e.target;
  if(item.classList[0] === "remove"){
	  var bin = item.parentElement;
	  bin.parentElement.remove();
  }
}

//EVENT LISTENERS

	// Add a new task to the list when you click the "+" button
button.addEventListener("click", addTask);
	// Add a new task to the list when you press enter key
document.addEventListener("keyup", function(event){
	if(event.keyCode==13)
		addTask();
})
list.addEventListener("click", deleteItem);