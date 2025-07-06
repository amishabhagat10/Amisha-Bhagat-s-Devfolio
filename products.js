// products.js
const products = [
  {
    name: "iphone",
    category: "electronics",
    price: 699,
    rating: 4.5,
    image: "assets/iphone.jpg"
  },
  {
    name: "Clothes",
    category: "clothing",
    price: 29,
    rating: 4.1,
    image: "assets/clothes.jpg"
  },
  {
    name: "Macbook",
    category: "electronics",
    price: 999,
    rating: 4.8,
    image: "assets/macbook.jpg"
  },
  {
    name: "Sneakers",
    category: "clothing",
    price: 89,
    rating: 4.4,
    image: "assets/shoes.jpg"
  }
];

let currentProducts = [...products];

function renderProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  currentProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Rating: ⭐ ${product.rating}</p>
    `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const value = document.getElementById("filter").value;
  currentProducts = value === "all" ? [...products] : products.filter(p => p.category === value);
  renderProducts();
}

function sortProducts() {
  const value = document.getElementById("sort").value;
  if (value === "price") {
    currentProducts.sort((a, b) => a.price - b.price);
  } else if (value === "rating") {
    currentProducts.sort((a, b) => b.rating - a.rating);
  }
  renderProducts();
}

window.onload = renderProducts;
