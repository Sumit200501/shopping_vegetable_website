let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  if (!cartItems || !totalPrice) return;

  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})" class="btn btn-xs btn-error ml-2">x</button>`;
    cartItems.appendChild(li);
  });

  totalPrice.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("hidden");
}

// Init
document.addEventListener("DOMContentLoaded", updateCartUI);
