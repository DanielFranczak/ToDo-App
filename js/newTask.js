function addNewTask(title){
    let taskLi = document.createElement('li');
    taskLi.classList.add('single-task');
    taskLi.innerHTML = title;
    //Add task to DOM
    tasksContainer.appendChild(taskLi);
}