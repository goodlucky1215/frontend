const todoform = document.querySelector(".js-toDoForm"),
  todoinput = todoform.querySelector("input"),
  todoList = document.querySelector(".js-toDoList");

const todo_list = "list";

let todo_list1 = [];

function deleteTODo(event) {
  const debtn = event.target;
  const li = debtn.parentNode;
  todoList.removeChild(li);
  const cleantodos = todo_list1.filter(function(todo) {
    return todo.id !== parseInt(li.id);
  });
  todo_list1 = cleantodos;
  saveToDos();
}
function saveToDos() {
  localStorage.setItem(todo_list, JSON.stringify(todo_list1));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btl = document.createElement("button");
  btl.innerText = "❌";
  btl.addEventListener("click", deleteTODo);
  const newId = todo_list1.length + 1;
  span.innerText = text;
  li.appendChild(btl);
  li.appendChild(span);
  todoList.appendChild(li);
  li.id = newId;
  const listbox = {
    text1: text,
    id: todo_list1.length + 1
  };
  todo_list1.push(listbox);
  saveToDos();
}

function handleSubmit(text) {
  text.preventDefault();
  const todovalue = todoinput.value;
  paintToDo(todovalue);
}

function loadtodos() {
  const list = localStorage.getItem(todo_list);
  if (list !== null) {
    const parsedtodos = JSON.parse(list);
    parsedtodos.forEach(function(todo) {
      paintToDo(todo.text1);
    });
  }
}

function init() {
  loadtodos();
  todoform.addEventListener("submit", handleSubmit);
}

init();
