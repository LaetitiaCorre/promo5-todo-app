"use strict";

let todoList = [
    {title: 'todo', 
    description: 'a thing to do.',
    isDone: false,},

    {title: 'todo', 
    description: 'a thing to do.',
    isDone: false,},

    {title: 'todo', 
    description: 'a thing to do.',
    isDone: false,},

    {title: 'todo', 
    description: 'a thing to do.',
    isDone: false,}
];

/*
let todoJson = JSON.stringify(todo);

console.log(JSON.parse(todoJson));

localStorage.setItem('todo', todoJson);

todo = undefined;

todo = localStorage.getItem('todo');
todo = JSON.parse(todo);
console.log(todo);
*/

function saveTodos(todos) {
    localStorage.setItem("todos",JSON.stringify(todos))// Convertir la donnée en string.
}

function getTodos() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if(!todos) {
        todos = [];
    }
    return todos;
}

function addTodo(todo) {
    let todos = getTodos();
    todos.push(todo);
    saveTodos(todos);
}

function updateDisplay() {
  let todoList = getTodos();
  let ul = document.querySelector('ul');

  todoList.forEach(function(todo) {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let checkbox = document.createElement('input');

    h2.textContent = todo.title;
    p.textContent = todo.description;
    
    checkbox.setAttribute('type', 'checkbox');
    if (todo.isDone) {
        checkbox.setAttribute('checked', '');
    }
    ul.appendChild(li);
    li.appendChild(div);
    li.appendChild(checkbox);
    div.appendChild(h2);
    div.appendChild(p);
  });
}

saveTodos(todoList);

let form = document.querySelector('form');

//document.querySelector('form').addEventListener('submit', function (event){

form.addEventListener('submit', function (event) {
   let inputTitle = document.querySelector('form input[name=title]');
   let inputDescription = document.querySelector('form input[name=description]');
   let newTodoTitle = inputTitle.value;
   let newTodoDescription = inputDescription.value;
   
   let newTodo = {
        title: newTodoTitle,
        description: newTodoDescription,
        isDone: false
   }
   event.preventDefault();
   console.log(newTodo);

   form.reset();
   addTodo(newTodo);

   updateDisplay();
});