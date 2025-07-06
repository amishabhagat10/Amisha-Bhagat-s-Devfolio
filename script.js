// Section Toggle
function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.classList.remove("active");
    section.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("active");
}

// To-Do App
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  document.getElementById("taskList").appendChild(li);

  input.value = "";
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("taskList").appendChild(li);
  });
}

loadTasks();

// Product Listing
const products = [
  { name: "Phone", category: "electronics", price: 699, rating: 4.5 },
  { name: "Shirt", category: "clothing", price: 29, rating: 4.0 },
  { name: "Headphones", category: "electronics", price: 199, rating: 4.3 },
  { name: "Jeans", category: "clothing", price: 59, rating: 3.9 },
];

function displayProducts(data) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  data.forEach(p => {
    const div = document.createElement("div");
    div.style.padding = "15px";
    div.style.border = "1px solid #ccc";
    div.style.borderRadius = "10px";
    div.innerHTML = `
      <h4>${p.name}</h4>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ${p.rating}</p>
    `;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("filter").value;
  const filtered = category === "all"
    ? products
    : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const sort = document.getElementById("sort").value;
  let sorted = [...products];
  if (sort === "price") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }
  displayProducts(sorted);
}

displayProducts(products);
