// Todo List App 
var todo = prompt("What would you like to do?");
todo = todo.toLowerCase();

var todoList = new Array();
while(todo !== "quit") {
    if(todo === "new") {
        var task = prompt("What do you want to add in TodoList?");
        todoList.push(task);
    } else if(todo === "list"){
       listTodos();
    } else if(todo === "delete") {
       deleteTodo();
    } 
    else {
        alert("Wrong Choice");
    }
    todo = prompt("What would you like to do?");
}

alert("In Your Todo List We have -> " + todoList);

function listTodos() {
     todoList.forEach(function(el,i){
            console.log("*************");
            console.log(i + ": " + el);
            console.log("*************");
        });
}

function deleteTodo() {
     var index = prompt("Enter the index to be deleted? ");
        todoList.splice(index,1);
  }