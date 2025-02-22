
const products = [
    { id: 1, name: "Product 1", price: 100, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Product 2", price: 200, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Product 3", price: 300, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Product 4", price: 400, image: "https://via.placeholder.com/200" },
    { id: 5, name: "Product 5", price: 500, image: "https://via.placeholder.com/200" },
    { id: 6, name: "Product 6", price: 600, image: "https://via.placeholder.com/200" },
    { id: 7, name: "Product 7", price: 700, image: "https://via.placeholder.com/200" },
    { id: 8, name: "Product 8", price: 800, image: "https://via.placeholder.com/200" },
    { id: 9, name: "Product 9", price: 900, image: "https://via.placeholder.com/200" },
    { id: 10, name: "Product 10", price: 1000, image: "https://via.placeholder.com/200" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCountElement = document.querySelector('.cart-count');
const productsContainer = document.getElementById('products-container');

// Render products
function renderProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

// Update cart count
function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

// Open cart page
function openCartPage() {
    window.location.href = 'cart.html';
}

// Event listeners
productsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
    }
});

// Initialize
updateCartCount();
renderProducts();
