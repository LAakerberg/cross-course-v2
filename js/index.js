import products from "./data/products.js";
const product = products;
const contentOne = document.querySelector(".one");
const contentTwo = document.querySelector(".two");
const contentThree = document.querySelector(".three");

const contentJacket = document.querySelector(".jacket-list");

contentOne.innerHTML += `
<div class="center">
<div class="campaign-left"><img class="jackets__image" src="images/andreas-wagner-8H5kNkYmJYQ-unsplash-width1000.jpg"/>
<a href="jackets.html" class="bottom-text">New jackets in store</a></div>
<div class="campaign-right"><img class="adventure__image" src="images/nina-luong-dy4QG5c5xWQ-unsplash-width1000.jpg" />
<a href="index.html" class="top-text">Your next adventure</a></div>
</div>`;

for (let i = 0; i < product.length; i++) {
  contentTwo.innerHTML += `
  <a href="jackets-specific.html?id=${product[i].id}">
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
