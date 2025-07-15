
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var pageContentEl = document.querySelector("#page-content");
var taskIdCounter = 0;


var taskFormHandler = function(event) {
  
    event.preventDefault();
// retrieve task value and task type 
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // check if input values are empty strings 
    if (!taskNameInput || !taskTypeInput){
        alert("my guy pic your struggle");
        return false;
    }

    // formresets to its default values 
    formEl.reset();

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

    //  add task id as a custom attribute 
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    // create div to hold task info and add list item 
    var taskInfoEl = document.createElement("div");
    // give it the class 
    taskInfoEl.className = "task-info";
    // add to HTML 
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3> <span class='task-type'>" + taskDataObj.type + "</span>";

    // once we set data ^ into the div , we append it to the list here li 
    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);


    // add entire list div to list (to the parent ul)
    tasksToDoEl.appendChild(listItemEl);

    // increase count for next unique id 
    taskIdCounter++;

};

var createTaskActions = function(taskId) {
    // create a div to hold the task 
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // create edit button 
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "edit task";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create delete button 
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "delete itttt";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    // add dropdown <select> element for status change to task
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className ="select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    // add status choices to each task ;can benefit to add options later 
    var statusChoices = ["not started", "doing", "donezo"];

for (var i = 0; i < statusChoices.length; i++) {
    // create option element 
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);

    // appent to select (drop down)
    statusSelectEl.appendChild(statusOptionEl);
}
    return actionContainerEl;
}
 
var taskButtonHandler = function(event) {
    console.log(event.target);
// if the delete button is clicked 
    if(event.target.matches(".delete-btn")) {
        // get the tasks id to know what task to delete 
        var taskId = event.target.getAttribute("data-task-id");
        deleteTask(taskId);
    }
};

var deleteTask = function(taskId) {
    // further narrowing our selection; this selector allows us to find a 
    // different element with the same attribute : data-task-id
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();

};

formEl.addEventListener("submit", taskFormHandler);
pageContentEl.addEventListener("click", taskButtonHandler);
