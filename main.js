var list = document.getElementById("taskList");
var deleted = document.getElementById("deleted");
var input = document.getElementById("input");
var button = document.getElementById("button");
var deleteButton = document.getElementsByClassName("trash");


function addTask(){
	var newTask = document.createElement("div");
	newTask.innerHTML =`<input class="checkStatus" type="Checkbox" name="" >
						<li class="item" >${input.value}
							<span class="edit">
								<i class="fa fa-pencil create" aria-hidden="true"></i>
							</span>
							<span class="remove">
								<i class="fa fa-trash trash" aria-hidden="true"></i>
							</span>
						</li>`;
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
	/*newTask.addEventListener("dblclick", function(){
		deleted.appendChild(newTask);
		list.removeChild(newTask);
	})*/
}

// Add a new task to the list when you click the "+" button
button.addEventListener("click", function(){
	//for(var i = 0; i<button.length;
	addTask();
})

// Add a new task to the list when you press enter key
document.addEventListener("keyup", function(event){
	if(event.keyCode==13)
		addTask();
})