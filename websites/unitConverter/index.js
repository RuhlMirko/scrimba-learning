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
  render();
}

function render() {
  let inner = `
    <div>
        <h2>Length (Meter/Feet)</h2>
        <p>
        ${userInp.value} meters = ${results[0]} feet ||
        ${userInp.value} feet = ${results[1]} meters
        </p>
    </div>
    <div>
        <h2>Volume (Liters/Gallons)</h2>
        <p>        
        ${userInp.value} liters = ${results[2]} gallons ||
        ${userInp.value} gallons = ${results[3]} liters
        </p>
    </div>
    <div>
        <h2>Mass (Kilograms/Pounds)</h2>
        <p>
        ${userInp.value} kilos = ${results[4]} pounds ||
        ${userInp.value} pounds = ${results[5]} kilos
        </p>
    </div> 
    `;

  document.getElementById("result").innerHTML = inner;
}

const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", convert);
