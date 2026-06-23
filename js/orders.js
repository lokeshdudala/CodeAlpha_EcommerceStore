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
            <h3>📦 No Orders Found</h3>
        </div>
        `;

        return;
    }

    orders.forEach(order => {

        order.products.forEach(item => {

            if (!item.product) return;

            container.innerHTML += `

            <div class="order-card">

                <img
                    src="${item.product.image}"
                    alt="${item.product.name}"
                    class="order-image"
                >

                <h3>
                    ${item.product.name}
                </h3>

                <p>
                    ${item.product.description}
                </p>

                <div class="order-price">
                    ₹${item.product.price}
                </div>

                <p>
                    📦 Quantity:
                    ${item.quantity}
                </p>

                <p>
                    📅 ${new Date(
                        order.createdAt
                    ).toLocaleString()}
                </p>

                <div class="order-status">
                    ✅ Delivered
                </div>

            </div>
            `;
        });

    });

} catch (error) {

    console.log(error);

    alert(
        "Failed to Load Orders"
    );
}


}

loadOrders();
