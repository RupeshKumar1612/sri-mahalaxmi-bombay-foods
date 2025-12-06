let cart = [];

// Add item to cart (merges duplicates)
function addToCart(item) {
    let existing = cart.find(x => x.id === item.id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCart();
}

// Update cart UI
function updateCart() {
    let cartContainer = document.getElementById("cart-items");
    let totalAmount = 0;

    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        totalAmount += item.price * item.qty;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (₹${item.price})</span>
                
                <div class="qty-box">
                    <button onclick="decreaseQty(${index})">-</button>
                    <span>${item.qty}</span>
                    <button onclick="increaseQty(${index})">+</button>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("cart-total").innerText = `Total: ₹${totalAmount}`;
}

// Increase quantity
function increaseQty(index) {
    cart[index].qty += 1;
    updateCart();
}

// Decrease quantity
function decreaseQty(index) {
    if (cart[index].qty > 1) {
        cart[index].qty -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// WhatsApp ordering
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello! I want to place an order:%0A%0A";

    cart.forEach(item => {
        message += `• ${item.name} x ${item.qty} = ₹${item.price * item.qty}%0A`;
    });

    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    message += `%0ATotal Amount: ₹${total}%0A%0AThank you!`;

    let phoneNumber = "919398404928"; // Replace with your shop WhatsApp number

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}
