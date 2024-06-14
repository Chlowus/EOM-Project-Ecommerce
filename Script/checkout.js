

let main = document.querySelector('.selected-items-display');
let totaling = document.querySelector('#addingUp');
let purchasedItems = JSON.parse(localStorage.getItem('purchasedGoods'));
let totalAmount = 0;

purchasedItems.forEach(item => {
    // Calculate the total amount
    totalAmount += item.price * item.quantity;

    // Check if the item already exists in the cart
    let existingItem = main.querySelector(`#cart-item-${item.id}`);
    if (existingItem) {
        // If the item exists, update its quantity
        existingItem.querySelector('.cart-item-quantity').textContent = `QTY: ${item.quantity}`;
    } else {
        // If the item doesn't exist, add it to the cart
        main.innerHTML += `
            <div id="cart-item-${item.id}">
                <img src="${item.image}" alt="" id="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <h5 class="cart-item-quantity">QTY: ${item.quantity}</h5>
                    <h3 class="cart-item-price">Price: R${item.price}</h3>
                </div>
            </div>
        `;
    }
});

// Display the total amount
totaling.innerHTML = `
    <div class="selected-items-price-info">
        <h4 class="sub-total">Sub-total</h4>
        <h4 class="sub-total-price">R${totalAmount}</h4>
        <h5 class="delivery">Delivery</h5>
        <h5 class="delivery-price">R6000</h5>
        <h3 class="total">Total</h3>
        <h3 class="total-price">R${totalAmount + 6000}</h3>
    </div>
`;

// Add an event listener to the clear cart button
document.querySelector('#clear-cart-btn').addEventListener('click', clearProducts);

// Function to clear products from the cart
function clearProducts() {
    localStorage.removeItem('purchasedGoods');
    alert('Press "OK" to remove items from your cart');
    location.reload();
}

// Add an event listener to the payment button
document.querySelector('#payment-btn').addEventListener('click', productPayment);

// Function to handle product payment
function productPayment() {
    localStorage.removeItem('purchasedGoods');
    alert('Payment Successful');
    location.reload();
}