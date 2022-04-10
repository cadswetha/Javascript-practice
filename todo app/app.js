const form = document.getElementById('form');
const input  = document.getElementById('input');
const todosUL = document.getElementById('todos');
 
const todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo =>{
        addTodo(todo);
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
});


function addTodo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const todoE = document.createElement("li");

        todoE.innerHTML = todoText;
        todosUL.appendChild(todoE);

        if(todo && todo.completed){
            todoE.classList.add('completed');
        }

        todoE.addEventListener('click',()=>{
            todoE.classList.toggle('completed');
            updateLS();
        })

        todoE.addEventListener('contextmenu' ,(e)=>{
            e.preventDefault();
            todoE.remove();
            updateLS();
        })

        input.value = "";
    }
    updateLS();
}

function updateLS(){
    const todosE = document.querySelectorAll('li');

    const todos = [];

    todosE.forEach((todo) =>{
        todos.push({
            text:todo.innerHTML,
            completed : todo.classList.contains('completed')
        })
    });

    localStorage.setItem("todos" , JSON.stringify(todos));
}