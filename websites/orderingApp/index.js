import { itemsArray } from "./data.js";
const itemsEL = document.getElementById("items");
const checkoutEL = document.getElementById("checkout");

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
  checkoutEL.innerHTML += `
    <div class="item">
        <div class="item-desc">
        <div>${targetObj.name}</div>
        <button>remove</button>
        </div>
        <div>USD $${targetObj.price}</div>
    </div>
  `;
};

renderProducts();
