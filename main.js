var list = document.getElementById("categoryList");
var input = document.getElementById("input");
var button = document.getElementById("button");
/*
button.onclick = ()=>{ //when user click on plus icon button
  let newTask = input.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if(getLocalStorageData == null){ //if localstorage has no data
    arrayList = []; //create a blank array
  }else{
    arrayList = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }
  arrayList.push(newTask); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(arrayList)); //transforming js object into a json string
}*/

button.addEventListener("click", function(){
	var newTask = document.createElement("li");
	newTask.innerHTML = input.value;
	if(input.value=="")
		alert("Enter a task");
	else{
		list.appendChild(newTask); 
		input.value="";
	}
})
		
document.addEventListener("keyup", function(event){
	var newTask = document.createElement("li");
	newTask.innerHTML = input.value;
	if(event.keyCode==13){
		if(input.value=="")
			alert("Enter a task");
		else{
			list.appendChild(newTask); 
			input.value="";
	}
	}
})
button.addEventListener("mouseover", function(){
	button.style.backgroundColor= "#3baaff";
});

button.addEventListener("mouseout", function(){
	button.style.backgroundColor= "#6BBFFF";
});

button.addEventListener("click", function(){
	button.style.backgroundColor= "#0894ff";
});