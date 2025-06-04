import { itemsArray } from "./data.js";
const itemsEL = document.getElementById("items");

let strHtml = "";
for (let i of itemsArray) {
  strHtml += `
    <div class="product">
        <img src="${i.image}" alt="" />
        <p>${i.name}</p>
        <h3>USD $${i.price}</h3>
        <button>Add to cart</button>
    </div>
`;
}

itemsEL.innerHTML = strHtml;
