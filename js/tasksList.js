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
function deleteTask (deleteBtn) {
    var liToDelete = deleteBtn.closest('li');
    deleteBtn.closest('ul').removeChild(liToDelete);
//rodzic.removeChild();
  }