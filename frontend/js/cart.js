if(!localStorage.getItem("token")){
    window.location.href = "login.html";
}
const API_URL = "http://localhost:5000/api/products";

async function loadCart() {

    const cartIds =
        JSON.parse(localStorage.getItem("cart")) || [];

    const container =
        document.getElementById("cart-container");

    container.innerHTML = "";

    let total = 0;

    for (let id of cartIds) {

        const response =
            await fetch(`${API_URL}/${id}`);

        const product =
            await response.json();

        total += product.price;

        container.innerHTML += `
            <div class="cart-item">

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

                <button onclick="removeFromCart('${id}')">
                    Remove
                </button>

            </div>
        `;
    }

    document.getElementById("total-price")
        .innerText = `Total: ₹${total.toFixed(2)}`;
}

function removeFromCart(id) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter(item => item !== id);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();
}

async function placeOrder() {

    const cartIds =
        JSON.parse(localStorage.getItem("cart")) || [];

    if(cartIds.length === 0){
        alert("Cart is Empty");
        return;
    }

    const totalText =
        document.getElementById("total-price").innerText;

    const totalAmount =
        parseFloat(totalText.replace("Total: ₹",""));

    const orderData = {
        user: null,
        products: cartIds.map(id => ({
            product: id,
            quantity: 1
        })),
        totalAmount
    };

    const response = await fetch(
        "http://localhost:5000/api/orders",
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(orderData)
        }
    );

    const data = await response.json();

    alert(data.message);

    localStorage.removeItem("cart");

    window.location.reload();
}

loadCart();