function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => {
    span.classList.toggle("completed");
    li.classList.toggle("completed");
  };

  const actions = document.createElement("div");
  actions.className = "actions";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.onclick = () => {
    li.remove();
    updateTaskCount();
  };

  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById("taskList").appendChild(li);
  input.value = "";

  updateTaskCount();
}

function updateTaskCount() {
  const count = document.querySelectorAll("#taskList li").length;
  let counter = document.querySelector(".task-count");

  if (!counter) {
    counter = document.createElement("div");
    counter.className = "task-count";
    document.querySelector(".box").appendChild(counter);
  }

  counter.textContent = `📝 You have ${count} task${count !== 1 ? "s" : ""}`;
}
