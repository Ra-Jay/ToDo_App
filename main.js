var list = document.getElementById("taskList");
var deleted = document.getElementById("deleted");
var input = document.getElementById("input");
var button = document.getElementById("button");

//FUNCTIONS
function addTask(){  //Add item
	//create a new div to store checkbox, li, edit button, and remove button
	var newTask = document.createElement("div");
	newTask.innerHTML =`<input class="checkStatus" type="Checkbox" name="" >`;
	//create new li to store the input value and append it to the newTask div
	var item = document.createElement("li");
	item.innerHTML = `<span id="todoItem">${input.value}</span>`;
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
	
	// Removes the task form the list when you click twice and stores it in Deleted list
	/*newTask.addEventListener("dblclick", function(){
		deleted.appendChild(newTask);
		list.removeChild(newTask);
	})*/
}

function deleteItem(e) { //Delete item
  var item = e.target;
  
}

function editItem(e) { //Edit item
	var item = e.target;
	var li = item.parentNode;

	if(item.classList[0] === "remove"){
		var bin = item.parentElement;
		bin.parentElement.remove();
	}
	else if(item.textContent === "save"){
		var input = li.firstElementChild;
		var span = document.createElement('span');
		span.textContent = input.value;
		span.id = "todoItem"
		li.insertBefore(span, input);
		li.removeChild(input);
		item.innerHTML= `<i class="fa fa-pencil create" aria-hidden="true"></i>`;
		item.style.padding = "0";
	}
	else if(item.classList[0] === "edit"){
		var span = li.firstElementChild;
		var input = document.createElement("input");
		input.type = "text";
		input.id = "todoItem"
		input.value = span.textContent;
		li.insertBefore(input, span);
		li.removeChild(span);
		item.textContent = "save";
		item.style.lineHeight = "40px";
		input.style.fontSize ="16px";	
		input.style.color ="red";
	}
}


//EVENT LISTENERS

button.addEventListener("click", addTask);//Add a new task to the list when you click the "+" button
document.addEventListener("keyup", function(e){ //Add a new task to the list when you press enter key
	if(e.keyCode==13){
		addTask();
	}
})
list.addEventListener("click", deleteItem); //Deletes item 
list.addEventListener("click", editItem); //Edit selected item
