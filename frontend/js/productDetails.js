if(!localStorage.getItem("token")){
    window.location.href = "login.html";
}
const API_URL = "http://localhost:5000/api/products";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

async function getProductDetails() {

    try {

        const response =
            await fetch(`${API_URL}/${productId}`);

        const product =
            await response.json();

        const container =
            document.getElementById("product-details");

        container.innerHTML = `
            <div class="details-card">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="details-content">

                    <h1>${product.name}</h1>

                    <p>${product.description}</p>

                    <h2>₹${product.price}</h2>

                    <button onclick="addToCart('${product._id}')">
                        Add To Cart
                    </button>

                </div>

            </div>
        `;

    } catch(error) {
        console.log(error);
    }
}

function addToCart(id) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(id);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Product Added To Cart");
}

getProductDetails();