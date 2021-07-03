var x=1;

function addtask(){
  var task = document.getElementById("newtask").value;
  //creates a input tag
  var checkbox = document.createElement("input");
  
  //to make the input tag as a checkbox input type
  checkbox.setAttribute("type", "checkbox");
  
  //An onclick event for the checkbox to remove from the completed and add to incomplete tasks
  checkbox.onclick = function() { complete() };
  
  //assigning a id for the checkbox  
  checkbox.id = "id "+x;
  checkbox.class="tasks";
  //creates a break tag
  var br = document.createElement("br");
  
  //creates a label tag
  var label = document.createElement('label'); 
  
  //to use the label for the checkbox
  label.htmlFor = "id "+x;  
  
  //appending the task to the label
  label.appendChild(document.createTextNode(task));
  
  //appending the checkbox label and the break tag to the incompleted tasks div
  incomplete_tasks.appendChild(checkbox);
  incomplete_tasks.appendChild(label);
  incomplete_tasks.appendChild(br);    
  document.getElementById("newtask").value = "";  

  //complete() function removes the task from the incompleted div and moves it to the completed div
  function complete(){  
      var gettask = document.getElementById("incomplete_tasks");
    
    //Removing the checkbox label and the break tag from the incompleted div
      gettask.removeChild(checkbox);
      gettask.removeChild(label);
      gettask.removeChild(br);
      var completed = document.getElementById("completed_tasks");
    
    //Adding the label and br tag to the completed task
      completed.appendChild(label);
      completed.appendChild(br);
    
    //Delete button will only be visible when a task is completed
      var delete_button = document.getElementById("delete_completed");
  delete_button.style.display="block";
  }
    x++;
}

 function delete_task(){
   //Deleting the completed tasks when the button is pressed
      document.getElementById("completed_tasks").innerHTML="";    
    //Removing the button once after the tasks are deleted
   var delete_button = document.getElementById("delete_completed");
   delete_button.style.display="none";
}