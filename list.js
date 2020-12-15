var todo = prompt("What would you like to do?");
todo = todo.toLowerCase();

var todoList = new Array();
while(todo !== "quit") {
    if(todo === "new") {
        var task = prompt("What do you want to add in TodoList?");
        todoList.push(task);
    } else if(todo === "list"){
        alert("Your Todo List [ " + todoList + " ]");
    } else {
        alert("Wrong Choice");
    }
    todo = prompt("What would you like to do?");
}

alert("In Your Todo List We have -> " + todoList);