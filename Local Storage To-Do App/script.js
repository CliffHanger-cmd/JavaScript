const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks on load
tasks.forEach((task, index) => {
  renderTask(task.text, task.completed, index);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text === "") return;

  const task = { text, completed: false };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask(text, false, tasks.length - 1);

  taskInput.value = "";
});

function renderTask(text, completed, index) {
  const li = document.createElement("li");
  if (completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.textContent = text;
  span.style.cursor = "pointer";
  span.onclick = () => toggleComplete(index);

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "delete-btn";
  del.onclick = () => deleteTask(index);

  li.appendChild(span);
  li.appendChild(del);
  li.setAttribute("data-index", index);
  taskList.appendChild(li);
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  refreshTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  refreshTasks();
}

function refreshTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => renderTask(task.text, task.completed, index));
}
