document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(products => displayProducts(products));
});

function displayProducts(products) {
    let productList = document.getElementById("products");
    productList.innerHTML = "";
    
    products.forEach(product => {
        let item = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Discount: ${product.discount}</p>
                <p>Rating: ⭐${product.rating}</p>
            </div>
        `;
        productList.innerHTML += item;
    });
}

// Search Functionality
function searchProducts() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    fetch("data.json")
        .then(response => response.json())
        .then(products => {
            let filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchValue)
            );
            displayProducts(filteredProducts);
        });
}
