var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 4000);



// Colnago sale cards
function CreateItem(id, name, subCategory, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.subCategory = subCategory;
    this.catergory = catergory
    this.image = image
    this.description = description
    this.price = price
    this.quantity = quantity
}

let item15 = new CreateItem(15,'Colnago V3 Disc Rival AXS Bike','roadBike','Bicycle','https://chlowus.github.io/hostedimages/3.png','The Colnago V3 is built around versatile performance. It is a balanced road bike with a lightweight frame, aerodynamically efficient geometry, and a reasonable price tag.',1, 64498)

let item16 = new CreateItem(16,'Colnago C68 Disc Dura-Ace Di2 Bike','roadBBike','Bicycle','https://chlowus.github.io/hostedimages/4.png','The Colnago V3 is built around versatile performance. It is a balanced road bike with a lightweight frame, aerodynamically efficient geometry, and a reasonable price tag.',1, 89746)

let item17 = new CreateItem(17,'Colnago C68 Ti Disc Daytona Pro Black Bike','roadBike','Bicycle','https://chlowus.github.io/hostedimages/5.png','The Colnago V3 is built around versatile performance. It is a balanced road bike with a lightweight frame, aerodynamically efficient geometry, and a reasonable price tag.',1, 280568)

let item18 = new CreateItem(18,'Colnago C68 Disc Gioiello Dura-Ace Di2 9200 Bike','roadBike','Bicycle','https://chlowus.github.io/hostedimages/6.png','The Colnago V3 is built around versatile performance. It is a balanced road bike with a lightweight frame, aerodynamically efficient geometry, and a reasonable price tag.',1, 322492)

let sales = document.querySelector('.home-products-cards')

let items = [item15,item16,item17,item18]
localStorage.setItem('sale-items',JSON.stringify(items))
items.forEach(item =>{
    sales.innerHTML +=`
            <div id="sale-card-s" class="card" style="width: 35rem;">
                <div id="sale-border" class="sale.box">
                    <h6>30% Sale</h6>
                </div>
                <img src="${item.image}" id="sale-bike1 "class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <h3>R${item.price}</h3>
                    <p class="now">NOW</p>
                    <a class="btn btn-primary sale-btn" data-itemId="${item.id}" onclick="addToCart(${item.id})">Add to cart</a>
                </div>
            </div>
    `
})

let purchasedItems = JSON.parse(localStorage.getItem('purchasedGoods')) || [];

function addToCart(itemhehe) {
    console.log("array"+items);
    let pG = items.find(item => item.id == itemhehe)
    console.log("pG"+pG);
    let existingItem = purchasedItems.find(cartItem => cartItem.id === itemhehe);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        pG.quantity = 1;
        purchasedItems.push(pG);
    }
    localStorage.setItem('purchasedGoods', JSON.stringify(purchasedItems));
}