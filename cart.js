let cart = JSON.parse(localStorage.getItem("cart")) || [];

const box = document.getElementById("cart-list");

let message = "Order from Sri Mahalaxmi Bombay Foods:%0A%0A";

cart.forEach((item, i) => {
    box.innerHTML += `
        <div class="menu-item">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
        </div>
    `;
    message += `${i+1}. ${item.name} - ₹${item.price}%0A`;
});

document.getElementById("whatsapp-btn").onclick = () => {
    window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`);
};
