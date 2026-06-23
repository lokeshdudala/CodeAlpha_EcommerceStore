if(!localStorage.getItem("token")){
window.location.href = "login.html";
}

const API_URL =
"https://codealpha-ecommercestore-tmkv.onrender.com/api/products";

const params =
new URLSearchParams(window.location.search);

const productId =
params.get("id");

async function getProductDetails() {


try {

    const response =
    await fetch(
        `${API_URL}/${productId}`
    );

    const product =
    await response.json();

    const container =
    document.getElementById(
        "product-details"
    );

    container.innerHTML = `
    <div class="details-card">

        <div>

            <div class="discount-badge">
                🔥 20% OFF
            </div>

            <img
                src="${product.image}"
                alt="${product.name}"
            >

        </div>

        <div class="details-content">

            <h1>
                ${product.name}
            </h1>

            <div class="rating">
                ⭐⭐⭐⭐⭐ (4.5 Ratings)
            </div>

            <h2>
                ₹${product.price}
            </h2>

            <p class="delivery">
                🚚 Free Delivery Available
            </p>

            <p>
                🔒 Secure Payment
            </p>

            <p>
                ${product.description}
            </p>

            <h4>
                🎨 Color Options
            </h4>

            <div class="colors">

                <span class="color black"></span>

                <span class="color blue"></span>

                <span class="color silver"></span>

            </div>

            <h4>
                💾 Storage
            </h4>

            <div class="storage">

                <button>
                    128GB
                </button>

                <button>
                    256GB
                </button>

                <button>
                    512GB
                </button>

            </div>

            <div class="action-buttons">

                <button
                onclick="addToCart('${product._id}')">

                    🛒 Add To Cart

                </button>

                <button
                class="buy-btn">

                    ⚡ Buy Now

                </button>

            </div>

        </div>

    </div>
    `;

} catch(error) {

    console.log(error);
}


}

function addToCart(id){


let cart =
JSON.parse(
    localStorage.getItem("cart")
) || [];

cart.push(id);

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

alert(
    "🛒 Product Added To Cart"
);


}

getProductDetails();
