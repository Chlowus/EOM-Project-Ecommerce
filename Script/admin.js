function CreateBicycle(id, name, subCategory, category, image, description, quantity, price) {
    this.id = id;
    this.name = name;
    this.subCategory = subCategory;
    this.category = category;
    this.image = image;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
}

// Create bicycle items
let roadBikes = [
    new CreateBicycle(1, 'Bianchi Via Nirone Sora Bike', 'Road Bicycle', 'Bicycle', 'https://chlowus.github.io/hostedimages/14.png', '#', 1, 25975),
    new CreateBicycle(2,'Pinarello Dogma F Disc Kaizen Pro Bike','Road Bicycle','Bicycle','https://chlowus.github.io/hostedimages/15.png','#', 1,303356),
    new CreateBicycle(3,'Cervelo S5 Kaizen Pro Black Bike','Road Bicycle','Bicycle','https://chlowus.github.io/hostedimages/16.png','#', 1,359946),
    new CreateBicycle(4,'Cannondale SuperSix EVO LAB71 Daytona Team Bike','Road Bicycle','Bicycle','https://chlowus.github.io/hostedimages/22.png','#',1,218008),
];

let trailBikes = [
    new CreateBicycle(5, 'Pinarello Dogma XC XX SL Eagle Transmission', 'Trail Bicycle', 'Bicycle', 'https://chlowus.github.io/hostedimages/18.png', '#', 1, 241201),
    new CreateBicycle(6,'Cervelo ZFS-5 GX Eagle AXS Transmission Bike','Trail Bicycle','Bicycle','https://chlowus.github.io/hostedimages/19.png','#',1,115961),
    new CreateBicycle(7,'Cannondale Scalpel HT HM Ultimate Bike','Trail Bicycle','Bicycle','https://chlowus.github.io/hostedimages/20.png','#',1,204093),
    new CreateBicycle(8,'Scott Genius 900 Tuned AXS Bike','Trail Bicycle','Bicycle','https://chlowus.github.io/hostedimages/21.png','#',1,112993),
];

let equipment = [
    new CreateBicycle(9, 'Continental Gatorskin Black Edition Foldable Clincher Tire', 'Equipment', 'Equipment', 'https://chlowus.github.io/hostedimages/7.png', '#', 1, 1002),
    new CreateBicycle(10,'Continental Xynotal Trail Soft 29" Tire','Equipment','Equipment','https://chlowus.github.io/hostedimages/8.png','#',1,1206),
    new CreateBicycle(11,'Garmin Edge 130 Plus Bundled Cycling Computer','Equipment','Equipment','https://chlowus.github.io/hostedimages/9.png','#',1,4642),
    new CreateBicycle(12,'Lezyne Super SV23 Multi-Tool','Equipment','Equipment','https://chlowus.github.io/hostedimages/10.png','#',1,1114),
    new CreateBicycle(13,'PRO Micro C02 Inflator System','Equipment','Equipment','https://chlowus.github.io/hostedimages/11.png','#',1,371),
    new CreateBicycle(14,'Elite Fly Tour de France Bottle White 750ml','Equipment','Equipment','https://chlowus.github.io/hostedimages/12.png','#',1,204),
];

// Combine all bicycle items into a single array
let allBicycles = [].concat(roadBikes, trailBikes, equipment);

// Function to display bicycles in a table format
function displayBicycles() {
    let table = document.querySelector("table");

    // Clear previous content
    table.innerHTML = '';

    if (allBicycles.length === 0) {
        table.innerHTML = `<div id="cen"><div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
    } else {
        let products = allBicycles.map((item, index) => {
            return `
                <tr>
                    <td class="text-white">${index + 1}</td>
                    <td class="text-white">${item.name}</td>
                    <td class="text-white">${item.subCategory}</td>
                    <td class="text-white">${item.category}</td>
                    <td class="text-white"><img src="${item.image}" style="width: 100px; height: 100px;"></td>
                    <td class="text-white">${item.description}</td>
                    <td class="text-white">${item.quantity}</td>
                    <td class="text-white">R${item.price}</td>
                    <td><button class="btn btn-primary edit" value="${index}" data-edit>edit</button></td>
                    <td><button class="btn btn-primary delete" value="${index}" data-delete>delete</button></td>
                </tr>
            `;
        });
        table.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Subcategory</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>${products.join("")}</tbody>`;
    }
}

// Display bicycles on page load
window.onload = function () {
    // Check if data exists in localStorage
    if (localStorage.getItem('allBicycles')) {
        // If data exists, parse it and assign it to allBicycles array
        allBicycles = JSON.parse(localStorage.getItem('allBicycles'));
    } else {
        // If no data exists, display the default bicycles
        displayBicycles();
    }

    // Display bicycles
    displayBicycles();
};

// Function to delete a bicycle item
function deleteBicycle(index) {
    allBicycles.splice(index, 1);
    // Update the data in localStorage
    localStorage.setItem('allBicycles', JSON.stringify(allBicycles));
    displayBicycles(); // Update the table display after deletion
}

// Function to edit a bicycle item
function editBicycle(index) {
    // Populate the edit modal fields with current data
    let bicycle = allBicycles[index];
    document.getElementById("editName").value = bicycle.name;
    document.getElementById("editSubCategory").value = bicycle.subCategory;
    document.getElementById("editCategory").value = bicycle.category;
    document.getElementById("editImage").value = bicycle.image;
    document.getElementById("editDescription").value = bicycle.description;
    document.getElementById("editQuantity").value = bicycle.quantity;
    document.getElementById("editPrice").value = bicycle.price;

    // Show the edit modal
    document.getElementById("editModal").style.display = "block";

    // Store the index in a data attribute for later use
    document.getElementById("editModal").setAttribute("data-index", index);
}

// Function to save changes made in the edit modal
function saveChanges() {
    // Get the index of the item being edited from the data attribute
    let index = parseInt(document.getElementById("editModal").getAttribute("data-index"));

    // Update the item with the new values from the modal inputs
    allBicycles[index].name = document.getElementById("editName").value;
    allBicycles[index].subCategory = document.getElementById("editSubCategory").value;
    allBicycles[index].category = document.getElementById("editCategory").value;
    allBicycles[index].image = document.getElementById("editImage").value;
    allBicycles[index].description = document.getElementById("editDescription").value;
    allBicycles[index].quantity = parseInt(document.getElementById("editQuantity").value);
    allBicycles[index].price = parseInt(document.getElementById("editPrice").value);

    // Update the data in localStorage
    localStorage.setItem('allBicycles', JSON.stringify(allBicycles));

    // Close the edit modal
    closeEditModal();

    // Update the table display
    displayBicycles();
}

// Function to close the edit modal
function closeEditModal() {
    // Hide the edit modal
    document.getElementById("editModal").style.display = "none";
}

// Add event listener for delete button clicks
document.querySelector("table").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      let index = event.target.value;
      deleteBicycle(index);
    }
});

// Add event listener for edit button clicks
document.querySelector("table").addEventListener("click", function (event) {
    if (event.target.classList.contains("edit")) {
      let index = event.target.value;
      editBicycle(index);
    }
});