if(!localStorage.getItem("token")){
    window.location.href = "login.html";
}

const API_URL =
"https://codealpha-ecommercestore-tmkv.onrender.com/api/products";

let allProducts = [];

async function fetchProducts() {

    try {

        const response =
            await fetch(API_URL);

        allProducts =
            await response.json();

        displayProducts(allProducts);

    } catch (error) {

        console.log(error);
    }
}

function displayProducts(products) {

    const container =
        document.getElementById(
            "products-container"
        );

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
        <div class="product-card">

            <div class="discount-badge">
                🔥 20% OFF
            </div>

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <h3>${product.name}</h3>

            <div class="rating">
                ⭐⭐⭐⭐⭐ (4.5)
            </div>

            <p>${product.description}</p>

            <div class="delivery">
                🚚 Free Delivery
            </div>

            <h2>₹${product.price}</h2>

          <div class="product-buttons">

    <button
        class="view-btn"
        onclick="viewProduct('${product._id}')">

        👁 View

    </button>

    <button
        class="cart-btn"
        onclick="addToCart('${product._id}')">

        🛒 Cart

    </button>

    <button
        class="wishlist-btn"
        onclick="addToWishlist('${product._id}')">

        ❤️

    </button>

</div>
            </div>

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
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.push(id);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert("🛒 Product Added To Cart");
}

function updateCartCount() {

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    const cartCount =
        document.getElementById(
            "cart-count"
        );

    if(cartCount){

        cartCount.innerText =
            cart.length;
    }
}

const searchInput =
    document.getElementById(
        "searchInput"
    );

if(searchInput){

    searchInput.addEventListener(
        "keyup",
        (e) => {

            const search =
                e.target.value
                .toLowerCase();

            const filteredProducts =
                allProducts.filter(
                    product =>
                    product.name
                    .toLowerCase()
                    .includes(search)
                );

            displayProducts(
                filteredProducts
            );
        }
    );
}

function addToWishlist(id){

    let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    if(!wishlist.includes(id)){

        wishlist.push(id);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        alert("❤️ Added To Wishlist");

    }else{

        alert("Already In Wishlist");
    }
}
fetchProducts();

updateCartCount();