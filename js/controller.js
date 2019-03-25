document.addEventListener('DOMContentLoaded',bindEvents);
const form=document.querySelector('#task-form');
const filter = document.querySelector('#filter-task');
const taskList=document.querySelector('#list-group'); 
const clearBtn = document.querySelector('#clear-tasks');
const taskInput = document.querySelector('#enter-task');

function bindEvents(){
    getTasks();
    //add a task event
form.addEventListener('submit',addTask);
//remove a task event
 taskList.addEventListener('click',removeTask);
 // controller-model-view

// //clear task event
clearBtn.addEventListener('click',clearTasks);
// //filter tasks events
filter.addEventListener('keyup',filterTasks);
}
