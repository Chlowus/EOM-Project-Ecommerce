let main = document.querySelector('.cart-container')
let purchasedItems = JSON.parse(localStorage.getItem('purchasedGoods'))
purchasedItems.forEach(purchasedItems =>{
    main.innerHTML +=`
    <div class="selected-items-display">
                        <img src="${purchasedItems.image}" alt="" id="cart-item-img">
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${purchasedItems.name}</h4>
                        <h5 class="cart-item-quantity">QTY: ${purchasedItems.quantity}</h5>
                        <h3 class="cart-item-price">Price: R${purchasedItems.price}</h3>
                    </div>
                </div>
                <div class="selected-items-price-calc">
                <div class="selected-items-price-info">
                    <h4 class="sub-total">Sub-total</h4>
                    <h4 class="sub-total-price">R${purchasedItems.price}</h4>
                    <h3 class="total">Total</h3>
                    <h3 class="total-price">R100000</h3>
                </div>
                <div class="selected-items-btn">
                    <button class="checkout-btn">Checkout</button>
                    <button class="clear-cart-btn">Clear Cart</button>
                </div>
                </div>
    
    `
})



// `
// <div>
//     <img src="${purchasedItems.image}">
//     <p>R${purchasedItems.price}</p>
// </div>
//               `