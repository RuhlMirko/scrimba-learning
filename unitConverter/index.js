"use strict";

const userInp = document.getElementById("user-input");
const results = [];
function convert() {
  const resultFeet = (userInp.value * 3.281).toFixed(3);
  const resultMeter = (userInp.value / 3.281).toFixed(3);

  const resultGallons = (userInp.value / 3.785).toFixed(3);
  const resultLiters = (userInp.value * 3.785).toFixed(3);

  const resultPounds = (userInp.value * 2.205).toFixed(3);
  const resultKgs = (userInp.value / 2.205).toFixed(3);

  results.push(
    resultFeet,
    resultMeter,
    resultGallons,
    resultLiters,
    resultPounds,
    resultKgs
  );
}

function render() {
  let completeStr = "";
  for (let i in results) {
  }
}

const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", convert);
