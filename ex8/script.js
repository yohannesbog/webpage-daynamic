/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/
var val= document.getElementById('add-button');



val.addEventListener('click', function() {
    var textInput = document.getElementById('description').value;
    var listItem = document.createElement('li');
    var todo = document.getElementById('todo-list');
    var newText = document.createTextNode(textInput);

    listItem.appendChild(newText);
    todo.appendChild(listItem)
    console.log(todo)

})
