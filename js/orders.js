if (!localStorage.getItem("token")) {
window.location.href = "login.html";
}

const userId =
localStorage.getItem("userId");

const API_URL =
`https://codealpha-ecommercestore-tmkv.onrender.com/api/orders/${userId}`;

async function loadOrders() {


try {

    const response =
    await fetch(API_URL);

    const orders =
    await response.json();

    const container =
    document.getElementById(
        "orders-container"
    );

    container.innerHTML = "";

    if (orders.length === 0) {

        container.innerHTML = `
        <div class="order-card">

            <h3>
                📦 No Orders Found
            </h3>

        </div>
        `;

        return;
    }

    orders.forEach(order => {

        container.innerHTML += `
        <div class="order-card">

            <h3>
                📦 Order ID
            </h3>

            <p>
                ${order._id}
            </p>

            <p>
                🛒 Products:
                ${order.products.length}
            </p>

            <div class="order-price">
                ₹${order.totalAmount}
            </div>

            <p>
                📅
                ${new Date(
                    order.createdAt
                ).toLocaleString()}
            </p>

            <div class="order-status">
                ✅ Delivered
            </div>

        </div>
        `;
    });

} catch (error) {

    console.log(error);

    alert(
        "Failed to Load Orders"
    );
}


}

loadOrders();
