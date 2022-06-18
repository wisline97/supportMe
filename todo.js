const toDoForm = document.querySelector(".todo__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo__list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", toDos);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  console.log(toDoInput.value);
  toDos.push(newToDo);
  paintToDo(newToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
