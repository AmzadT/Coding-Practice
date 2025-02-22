// Load cart data from localStorage or initialize an empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to save cart data to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalAmountElement = document.getElementById("total-amount");
    const cartCountElement = document.getElementById("cart-count");

    cartItemsContainer.innerHTML = "";
    let totalAmount = 0;
    let totalItems = 0;

    cart.forEach((item) => {
        // Ensure all fields have valid default values
        const { id, name = "Unnamed Product", price = 0, image = "", quantity = 1 } = item;

        // Convert price and quantity to numbers to avoid NaN
        const validPrice = parseFloat(price) || 0;
        const validQuantity = parseInt(quantity) || 0;

        // Create cart item element
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${image}" alt="${name}">
            <div>${name}</div>
            <div>$${validPrice.toFixed(2)}</div>
            <div class="quantity-controls">
                <button onclick="decrementQuantity(${id})">-</button>
                <span>${validQuantity}</span>
                <button onclick="incrementQuantity(${id})">+</button>
            </div>
            <div>$${(validPrice * validQuantity).toFixed(2)}</div>
            <button class="delete-button" data-id="${id}">Delete</button>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Update total amount and item count
        totalAmount += validPrice * validQuantity;
        totalItems += validQuantity;
    });

    // Update total amount and cart count in the DOM
    totalAmountElement.textContent = totalAmount.toFixed(2);
    cartCountElement.textContent = totalItems;

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const productId = parseInt(e.target.getAttribute("data-id"));
            deleteProduct(productId);
        });
    });

    // Save updated cart to localStorage
    saveCartToLocalStorage();
}

// Function to delete a product
function deleteProduct(id) {
    cart = cart.filter((item) => item.id !== id);
    renderCart(); // Re-render cart after deletion
}

// Function to increment quantity
function incrementQuantity(id) {
    const product = cart.find((item) => item.id === id);
    if (product) {
        product.quantity = (parseInt(product.quantity) || 0) + 1;
        renderCart();
    }
}

// Function to decrement quantity
function decrementQuantity(id) {
    const product = cart.find((item) => item.id === id);
    if (product && product.quantity > 1) {
        product.quantity = (parseInt(product.quantity) || 0) - 1;
        renderCart();
    }
}

// Function to go back to the products page
function goBack() {
    window.location.href = "AddToCart.html"; 
}

// Initial Render
renderCart();
