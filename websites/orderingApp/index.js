import { itemsArray } from "./data.js";
const itemsEL = document.getElementById("items");
const checkoutEL = document.getElementById("checkout");

const cartItems = [];
let totalUSD = 0;

function renderProducts() {
  let strHtml = "";
  for (let i of itemsArray) {
    strHtml += `
        <div class="product" >
            <img src="${i.image}" alt="" />
            <p>${i.name}</p>
            <h3>USD $${i.price}</h3>
            <button data-id=${i.id}>Add to cart</button>
        </div>
    `;
  }
  itemsEL.innerHTML = strHtml;
}

document.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    addToCart(e.target.dataset.id);
  }
});

const addToCart = function (id) {
  const targetObj = itemsArray.filter(function (item) {
    return item.id == id;
  })[0];
  cartItems.push(`<div class="item">
    <div class="item-desc"><div>${targetObj.name}</div><button class='remove-btn'>remove</button></div>
    <div>USD $${targetObj.price}</div>
    </div>
  `);
  totalUSD += targetObj.price;
  renderCheckout();
};

const renderCheckout = function () {
  console.log(cartItems);
  let strHtml = "";
  for (let i of cartItems) {
    strHtml += i;
  }
  checkoutEL.innerHTML =
    strHtml +
    `
    <div class='total-container'>
      <hr>
      <p>Total: USD $${Math.round(totalUSD * 100) / 100}<p>
      <button class='checkout-btn'>Complete Order</button>    
    <div>
    ` +
    "";
  //Math.round(totalUSD * 100) / 100
};

const deleteItem = function () {};
//tweetsData = tweetsData.filter((t) => t.uuid !== uuid);

renderProducts();
