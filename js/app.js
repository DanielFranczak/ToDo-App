//Variabl
var newTaskform = document.querySelector('.new-task-container form');
let tasksContainer = document.querySelector('.tasks-container ul')


//on DOM load
document.addEventListener('DOMContentLoaded', function(){
    bindAddTaskEvents();
    showTasks();
});