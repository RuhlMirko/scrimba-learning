//document.getElementById("count-el");

// let firstBatch = 5;
// let secondBatch = 7;

// let counter = firstBatch + secondBatch;
// console.log(counter);

let counter = document.getElementById("count-el");
let count = 0;

let savedEl = document.getElementById("saved-el");

function increment() {
  count++;
  counter.textContent = count;
}

function save() {
  let newStr = ` ${count} - `;
  savedEl.textContent += newStr;
  counter.textContent = count = 0;
}
