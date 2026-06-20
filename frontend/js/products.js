if(!localStorage.getItem("token")){
    window.location.href = "login.html";
}
const API_URL = "http://localhost:5000/api/products";

let allProducts = [];

async function fetchProducts() {
    try {

        const response = await fetch(API_URL);

        allProducts = await response.json();

        displayProducts(allProducts);

    } catch (error) {
        console.log(error);
    }
}

function displayProducts(products) {

    const container =
        document.getElementById("products-container");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <h2>₹${product.price}</h2>

                <button onclick="viewProduct('${product._id}')">
                    View Details
                </button>

                <button onclick="addToCart('${product._id}')">
                    Add To Cart
                </button>

            </div>
        `;
    });
}

function viewProduct(id) {
    window.location.href =
        `product-details.html?id=${id}`;
}

function addToCart(id) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(id);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert("Product Added To Cart");
}

function updateCartCount() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const cartCount =
        document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", (e) => {

        const search =
            e.target.value.toLowerCase();

        const filteredProducts =
            allProducts.filter(product =>
                product.name
                    .toLowerCase()
                    .includes(search)
            );

        displayProducts(filteredProducts);
    });
}

fetchProducts();

updateCartCount();