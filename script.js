document.addEventListener("DOMContentLoaded", function() {
    let catalog = document.getElementById("catalog");

    let products = [
        { id: 1, name: "Яблоки", price: 100, image: "apple.jpg" },
        { id: 2, name: "Бананы", price: 80, image: "banana.jpg" },
        { id: 3, name: "Апельсины", price: 120, image: "orange.jpg" }
    ];

    products.forEach(product => {
        let item = document.createElement("div");
        item.classList.add("product");
        item.innerHTML = `
            <img src="${product.image}" width="100">
            <h3>${product.name}</h3>
            <p>${product.price} руб.</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        catalog.appendChild(item);
    });
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = { id, quantity: 1 };

    let index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        cart[index].quantity++;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину!");
      }
