function addNewTask(title){
    let taskLi = document.createElement('li');
    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);
    //Add task to DOM
    tasksContainer.appendChild(taskLi);
}

function prepareTaskHTML(title){
    return '<div class="input-group">' +
    '<span class="input-group-btn">' +
        '<button class="btn btn-default toggle-complete-btn">'+
           ' <i class="fas fa-check"></i>'+
        '</button>'+
    '</span>' +
    '<input type="text" class="form-control" placeholder="Task name" value="' + title +'">' +
    '<span class="input-group-btn">' +
       ' <button class="btn btn-danger delete-task-btn">'+
          ' <i class="fas fa-times"></i>'+
        '</button>' +
    '</span>'+
    '</div>';
}