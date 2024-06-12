let main = document.querySelector('main')
let purchasedItems = JSON.parse(localStorage.getItem('purchasedGoods'))
purchasedItems.forEach(purchasedItems =>{
    main.innerHTML += `
        <div>
            <img src="${purchasedItems.image}">
            <p>R${purchasedItems.price}</p>
        </div>
                      `
})