const menu = [
    { name: "Vada Pav", price: 25, img: "images/vadapav.jpg" },
    { name: "Bread Pakoda", price: 30, img: "images/breadpakoda.jpg" },
    { name: "Grill Veg Sandwich", price: 70, img: "images/sandwich.jpg" },
    { name: "Grill Veg Sandwich (Cheese)", price: 80, img: "images/sandwich.jpg" },
    { name: "Grill Aloo Sandwich", price: 70, img: "images/sandwich.jpg" },
    { name: "Grill Aloo Sandwich (Cheese)", price: 80, img: "images/sandwich.jpg" },
    { name: "Bread Butter Cheese Sandwich", price: 60, img: "images/sandwich.jpg" },
    { name: "Sarvapindi", price: 30, img: "images/sarvapindi.jpg" },
    { name: "Pav Bhaji", price: 80, img: "images/pavbhaji.jpg" },
    { name: "Misal Pav", price: 80, img: "images/misalpav.jpg" },
    { name: "Mirchi Bajji", price: 30, img: "images/mirchibajji.jpg" },
    { name: "Cut Mirchi", price: 50, img: "images/cutmirchi.jpg" }
];

const container = document.getElementById("menu-items");

menu.forEach((item, index) => {
    container.innerHTML += `
        <div class="menu-item">
            <img src="${item.img}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        </div>
    `;
});

function addToCart(i) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(menu[i]);
    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cart-count").textContent = cart.length;
}
