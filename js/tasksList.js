//showTasks
function showTasks(){
    tasks.forEach(function (title) {  
        addNewTask(title);

    });
}

//toggle complere
function toggleTaskComplete(task){
    task.classList.toggle('btn-success');
}
//delete task
function deleteTask () {
    var liToDelete = task.closest('li');
    task.closest('ul').removeChild(liToDelete);
//rodzic.removeChild();
  }