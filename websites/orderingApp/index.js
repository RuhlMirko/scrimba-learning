import { itemsArray } from "./data.js";
const itemsEL = document.getElementById("items");

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

document.addEventListener("click", function (e) {
  addToCart(e.target.dataset.id);
});

const addToCart = function (id) {};

itemsEL.innerHTML = strHtml;
