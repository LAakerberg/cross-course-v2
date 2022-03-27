import products from "./data/products.js";

const contentJacket = document.querySelector(".jacket-list");

const product = products;

for (let i = 0; i < product.length; i++) {
  contentJacket.innerHTML += `<a href="jackets-specific.html?id=${product[i].id}">
  <div class="product">
  <img src="${product[i].img}" alt="${product[i].name}"
    class="products__image" />
  <div class="small-product-text">
    <h3>${product[i].name}</h3>
    <p>${product[i].subName}</p>
    <p>${product[i].price},- NOK</p>
  </div>
</div></a>`;
}
