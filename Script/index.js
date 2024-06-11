var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 3000);



// Colnago sale cards
function CreateItem(id, name, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.catergory = catergory
    this.image = image
    this.description = description
    this.price = price
    this.quantity = quantity
}

let item1 = new CreateItem(1,'Colnago V3 Disc Rival AXS Bike','Bicycle','https://chlowus.github.io/hostedimages/3.png','The Colnago V3 is built around versatile performance. It is a balanced road bike with a lightweight frame, aerodynamically efficient geometry, and a reasonable price tag.',1, 64498)

let item2 = new CreateItem(1,'Colnago C68 Disc Dura-Ace Di2 Bike','Bicycle','https://chlowus.github.io/hostedimages/4.png','The Colnago V3 is built around versatile performance. It is a balanced road bike with a lightweight frame, aerodynamically efficient geometry, and a reasonable price tag.',1, 89746)

let item3 = new CreateItem(1,'Colnago C68 Ti Disc Daytona Pro Black Bike','Bicycle','https://chlowus.github.io/hostedimages/5.png','The Colnago V3 is built around versatile performance. It is a balanced road bike with a lightweight frame, aerodynamically efficient geometry, and a reasonable price tag.',1, 280568)

let item4 = new CreateItem(1,'Colnago C68 Disc Gioiello Dura-Ace Di2 9200 Bike','Bicycle','https://chlowus.github.io/hostedimages/6.png','The Colnago V3 is built around versatile performance. It is a balanced road bike with a lightweight frame, aerodynamically efficient geometry, and a reasonable price tag.',1, 322492)

let sales = document.querySelector('.home-products-cards')

let items = [item1,item2,item3,item4]
localStorage.setItem('sale-items',JSON.stringify(items))
items.forEach(item =>{
    sales.innerHTML +=`
            <div id="sale-card-s" class="card" style="width: 35rem;">
                <div id="sale-border" class="sale.box">
                    <h6>30% Sale</h6>
                </div>
                <img src="${item.image}" id="sale-bike1 "class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <h3>R${item.price}</h3>
                <p class="now">NOW</p>
                <a href="#" class="btn btn-primary sale-btn">Add to cart</a>
              </div>
             </div>
    `
})