import { itemsArray } from "./data.js";
const itemsEL = document.getElementById("items");
const checkoutEL = document.getElementById("checkout");
const modalEL = document.getElementById("modal");
const bgDiv = document.getElementById("background");
const modalTotal = document.getElementById("total");

let cartItems = [];
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
  } else if (e.target.dataset.delete) {
    deleteItem(e.target.dataset.delete);
  } else if (e.target.id == "complete-order") {
    renderModal();
  }
});

const addToCart = function (id) {
  const targetObj = itemsArray.filter(function (item) {
    return item.id == id;
  })[0];
  cartItems.push(targetObj);
  totalUSD += targetObj.price;
  renderCheckout();
};

const renderCheckout = function () {
  let strHtml = "";
  for (let i of cartItems) {
    strHtml += `<div class="item">
      <div class="item-desc"><div>${i.name}</div><button class='remove-btn' data-delete='${i.id}'>remove</button></div>
      <div>USD $${i.price}</div>
    </div>`;
  }
  checkoutEL.innerHTML =
    strHtml +
    `
    <div class='total-container'>
      <hr>
      <p>Total: USD $${Math.round(totalUSD * 100) / 100}<p>
      <button class='checkout-btn' id='complete-order'>Complete Order</button>    
    <div>
    `;
};

const deleteItem = function (id) {
  cartItems.forEach((item) => {
    if (item.id == id) {
      totalUSD -= item.price;
    }
  });
  cartItems = cartItems.filter((item) => item.id !== Number(id));

  renderCheckout();
};

const renderModal = function () {
  bgDiv.classList.add("blur");
  modalEL.style.display = "flex";
  // modalEL.innerHTML += `<h2>Total: USD $${totalUSD}</h2>`;
  modalTotal.innerText = `Total: USD $${totalUSD}`;
  document.addEventListener("click", function (e) {
    if (e.target.id !== "complete-order") {
      modalEL.style.display = "none";
      bgDiv.classList.remove("blur");
    }
  });
};

renderProducts();
