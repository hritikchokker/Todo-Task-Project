function addTask(e) {
    if (taskInput.value === "") {
        alert("please enter the task");
    } 
    //create li element 
    const li =document.createElement('li');
    //add class to it
    li.className='list-group-item mylist ';
    //create text node
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element

    const link=document.createElement('a');
    //add class
    link.className = 'close';
    link.innerHTML = '<i class="fas fa-times ml-auto"></i>';
    li.appendChild(link);
    //append the link to ui
    taskList.appendChild(li);

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear the input
    taskInput.value='';
    // console.log(li);
    e.preventDefault();

}
//remove task
function removeTask(e){
    // console.log(e);
if(e.target.parentElement.classList.contains('close')){
    // console.log(e.target);
    if(confirm('are u sure ?')){
        e.target.parentElement.parentElement.remove();
        //remove from local storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}
    // console.log(e.target);
}

//clear task event
function clearTasks(e){
    //direct slower
    // taskList.innerHTML='';
    confirm("are u sure to remove all");
    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
}
//clear all from local storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}
//filter the task results
function filterTasks(e) {
    //storing the typed filter input
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.mylist').forEach((task)=>{
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.getElementsByClassName.display='block';
            // console.log(text);
            //  console.log(item);
        }else{
            task.style.display='none';
        }
    });
    // console.log(text);
}

//storing in local storage(browser)
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null ){
        tasks=[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));

}
function getTasks(){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((task)=>{
        const li = document.createElement('li');
        //add class to it
        li.className = 'list-group-item mylist ';
        //create text node
        li.appendChild(document.createTextNode(task));
        //create new link element

        const link = document.createElement('a');
        //add class
        link.className = 'close';
        link.innerHTML = '<i class="fas fa-times ml-auto"></i>';
        li.appendChild(link);
        //append the link to ui
        taskList.appendChild(li);
    })
}
//remove from local storage
function removeTaskFromLocalStorage(taskItem,index){
   let tasks;
   if (localStorage.getItem('tasks') === null) {
       tasks = [];
   } else {
       tasks = JSON.parse(localStorage.getItem('tasks'));
   }
   tasks.forEach((task)=>{
       if(taskItem.textContent===task){
           tasks.splice(index,1);
       }
   });
   localStorage.setItem('tasks',JSON.stringify(tasks));
    // console.log(taskItems);
}