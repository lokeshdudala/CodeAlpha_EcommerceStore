if(!localStorage.getItem("token")){
window.location.href = "login.html";
}

const API_URL =
"https://codealpha-ecommercestore-tmkv.onrender.com/api/products";

async function loadWishlist(){


const wishlist =
JSON.parse(
    localStorage.getItem("wishlist")
) || [];

const container =
document.getElementById(
    "wishlist-container"
);

container.innerHTML = "";

if(wishlist.length === 0){

    container.innerHTML = `
        <div class="order-card">
            <h3>❤️ No Wishlist Items</h3>
        </div>
    `;

    return;
}

for(let id of wishlist){

    try{

        const response =
        await fetch(
            `${API_URL}/${id}`
        );

        const product =
        await response.json();

        container.innerHTML += `
        <div class="wishlist-card">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="wishlist-card-content">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <h2>
                    ₹${product.price}
                </h2>

                <div class="product-buttons">

                    <button
                    class="cart-btn"
                    onclick="addToCart('${product._id}')">

                        🛒 Add To Cart

                    </button>

                    <button
                    class="remove-btn"
                    onclick="removeFromWishlist('${product._id}')">

                        ❌ Remove

                    </button>

                </div>

            </div>

        </div>
        `;

    }catch(error){

        console.log(error);
    }
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

alert("🛒 Added To Cart");


}

function removeFromWishlist(id){


let wishlist =
JSON.parse(
    localStorage.getItem("wishlist")
) || [];

wishlist =
wishlist.filter(
    item => item !== id
);

localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
);

alert("❌ Removed From Wishlist");

loadWishlist();

}

loadWishlist();
