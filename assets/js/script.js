var buttonEl= document.querySelector("#save-task");

var taskTodoEl=document.querySelector("#tasks-to-do");



var createTaskHanler= function(){
  var listItemEl=document.createElement("li");
  listItemEl.textContent="This is a new task";
  listItemEl.className="task-item";
  taskTodoEl.appendChild(listItemEl);
};
buttonEl.addEventListener("click",createTaskHanler);
