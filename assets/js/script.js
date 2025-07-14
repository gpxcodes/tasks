var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var taskFormHandler = function(event) {
  
    event.preventDefault();
// retrieve task value and task type 
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // package up data as object for new fuction code refactor 
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl function 
    createTaskEl(taskDataObj);
    
};


var createTaskEl = function(taskDataObj) {

     // create list item 
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add list item 
    var taskInfoEl = document.createElement("div");
    // give it the class 
    taskInfoEl.className = "task-info";
    // add to HTML 
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3> <span class='task-type'>" + taskDataObj.type + "</span>";

    // once we set data ^ into the div , we append it to the list here li 
    listItemEl.appendChild(taskInfoEl);

    // add entire list div to list (to the parent ul)
    tasksToDoEl.appendChild(listItemEl);

}

formEl.addEventListener("submit", taskFormHandler);
