document.addEventListener("DOMContentLoaded", function() {
    showCart();
});

function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    cart.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p>Товар ID: ${item.id} - Количество: ${item.quantity}</p>
        `;
        cartContainer.appendChild(div);
    });
}

function placeOrder() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }

    let orderDetails = cart.map(item => `Товар ID: ${item.id}, Количество: ${item.quantity}`).join("\n");

    // Отправка заказа в WhatsApp
    let phone = "+79507249862";
    let message = encodeURIComponent("Новый заказ:\n" + orderDetails);
    let whatsappURL = `https://wa.me/${phone}?text=${message}`;

    window.open(whatsappURL, "_blank");

    localStorage.removeItem("cart");
    alert("Заказ отправлен!");
      }
