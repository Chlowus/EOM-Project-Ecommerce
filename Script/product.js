// Loader
// if (sales1.length === 0) {
//     main.innerHTML = `<div id="cen">
//               <div class="spinner-border text-danger" role="status">
//                   <span class="visually-hidden">Loading...</span>
//               </div>
//           </div>
//     `;
//   } else {
//     addToPage(products);
//   }

// product cards
function CreateItem(id, name, subCatergory, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.subCatergory = subCatergory
    this.catergory = catergory
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price
}

// Road Bikes
let item1 = new CreateItem(1,'Bianchi Via Nirone Sora Bike','Road Bicycle','Bicycle','https://chlowus.github.io/hostedimages/14.png','#', 1,25975)

let item2 = new CreateItem(2,'Pinarello Dogma F Disc Kaizen Pro Bike','Road Bicycle','Bicycle','https://chlowus.github.io/hostedimages/15.png','#', 1,303356)

let item3 = new CreateItem(3,'Cervelo S5 Kaizen Pro Black Bike','Road Bicycle','Bicycle','https://chlowus.github.io/hostedimages/16.png','#', 1,359946)

let item4 = new CreateItem(4,'Cannondale SuperSix EVO LAB71 Daytona Team Bike','Road Bicycle','Bicycle','https://chlowus.github.io/hostedimages/22.png','#',1,218008)

// Trail Bikes
let item5 = new CreateItem(5,'Pinarello Dogma XC XX SL Eagle Transmission','Trail Bicycle','Bicycle','https://chlowus.github.io/hostedimages/18.png','#',1,241201)

let item6 = new CreateItem(6,'Cervelo ZFS-5 GX Eagle AXS Transmission Bike','Trail Bicycle','Bicycle','https://chlowus.github.io/hostedimages/19.png','#',1,115961)

let item7 = new CreateItem(7,'Cannondale Scalpel HT HM Ultimate Bike','Trail Bicycle','Bicycle','https://chlowus.github.io/hostedimages/20.png','#',1,204093)

let item8 = new CreateItem(8,'Scott Genius 900 Tuned AXS Bike','Trail Bicycle','Bicycle','https://chlowus.github.io/hostedimages/21.png','#',1,112993)


// Equipment
let item9 = new CreateItem(9,'Continental Gatorskin Black Edition Foldable Clincher Tire','Equipment','Equipment','https://chlowus.github.io/hostedimages/7.png','#',1,1002)

let item10 = new CreateItem(10,'Continental Xynotal Trail Soft 29" Tire','Equipment','Equipment','https://chlowus.github.io/hostedimages/8.png','#',1,1206)

let item11 = new CreateItem(11,'Garmin Edge 130 Plus Bundled Cycling Computer','Equipment','Equipment','https://chlowus.github.io/hostedimages/9.png','#',1,4642)

let item12 = new CreateItem(12,'Lezyne Super SV23 Multi-Tool','Equipment','Equipment','https://chlowus.github.io/hostedimages/10.png','#',1,1114)

let item13 = new CreateItem(13,'PRO Micro C02 Inflator System','Equipment','Equipment','https://chlowus.github.io/hostedimages/11.png','#',1,371)

let item14 = new CreateItem(14,'Elite Fly Tour de France Bottle White 750ml','Equipment','Equipment','https://chlowus.github.io/hostedimages/12.png','#',1,204)


let allList = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14]

let sales1 = document.querySelector('.p-products-cardsRB')
let sales2 = document.querySelector('.p-products-cardsTB')
let sales3 = document.querySelector('.p-products-cardsEQ')

let roadBikes = [item1,item2,item3,item4]
let trailBikes = [item5,item6,item7,item8]
let equipment = [item9,item10,item11,item12,item13,item14]



localStorage.setItem('RB-product-items',JSON.stringify(roadBikes))
localStorage.setItem('TB-product-items',JSON.stringify(trailBikes))
localStorage.setItem('EQ-product-items',JSON.stringify(equipment))

function displayProducts(args){
if(!args){
    roadBikes.forEach(item =>{
    sales1.innerHTML +=`
            <div id="sale-card-s" class="card" style="width: 28rem;">
                <img src="${item.image}" id="sale-bike1 "class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <h3>R${item.price}</h3>
                <a class="btn btn-primary sale-btn" id="${item.id}" addToCart>Add to cart</a>
              </div>
              </div>
    `
})

trailBikes.forEach(item =>{
    sales2.innerHTML +=`
            <div id="sale-card-s" class="card" style="width: 28rem;">
                <img src="${item.image}" id="sale-bike1 "class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <h3>R${item.price}</h3>
                <a class="btn btn-primary sale-btn" id="${item.id}" addToCart>Add to cart</a>
              </div>
              </div>
    `
})

equipment.forEach(item =>{
    sales3.innerHTML +=`
            <div id="sale-card-s" class="card" style="width: 28rem;">
                <img src="${item.image}" id="sale-bike1 "class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <h3>R${item.price}</h3>
                <a type="submit" class="btn btn-primary sale-btn" id="${item.id}" addToCart>Add to cart</a>
              </div>
              </div>
    `
})}else{
    args.forEach(item =>{
        sales1.innerHTML=''
        sales2.innerHTML=''
        sales3.innerHTML=''
        sales1.innerHTML +=`
                <div id="sale-card-s" class="card" style="width: 28rem;">
                    <img src="${item.image}" id="sale-bike1 "class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <h3>R${item.price}</h3>
                    <a type="submit" class="btn btn-primary sale-btn" id="${item.id}" addToCart>Add to cart</a>
                  </div>
                  </div>
        `
    })
}

}

displayProducts()



function addToCart(id){
    let [item] = roadBikes.filter(Object=> Object.id === +id)
    purchasedItems.push(item)
    localStorage.setItem('purchasedGoods',JSON.stringify(purchasedItems))
    }
    let purchaseButtons =  document.querySelector('.sale-btn')
            
            
let purchasedItems = []

document.querySelectorAll("[addToCart]").forEach( (button)=>{
    button.addEventListener("click", () => {
        allList.forEach(product => {
            if (product.id == button.id) {
                
                purchasedItems.push(product)
                localStorage.setItem('purchasedGoods',JSON.stringify(purchasedItems))
            }
        })
    })
}
);



// Search
let search = document.querySelector('#search')

search.addEventListener('keyup', (event) => {
    // try {
        const searchTerm = event.target.value.trim().toLowerCase();
        if (searchTerm.length < 1) {
            displayProducts(allList)
        }
        let filteredProducts = allList.filter(product =>
            product.name.toLowerCase().includes(searchTerm))
            // console.log(filteredProducts);
        displayProducts(filteredProducts)
        if (filteredProducts.length === 0) {
            throw new Error(`${searchTerm} was not found`)
        }
    // } catch (e) {
    //     container.textContent = e.message || 'Please try again later'
    // }
})