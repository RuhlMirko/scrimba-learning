const getSchemeBtn = document.getElementById("get-scheme");
const schemeSelect = document.getElementById("scheme-selector");
const hexcodesContainer = document.getElementById("color-scheme-hexcodes");
const displayContainer = document.getElementById("color-scheme-display");
const baseColor = document.getElementById("base-color-picker");

getSchemeBtn.addEventListener("click", () => {
  const targetHex = baseColor.value.slice(1, 7).toUpperCase();
  console.log(schemeSelect.value, targetHex);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${targetHex}&mode=${schemeSelect.value}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.colors);
      let displayHtml = "";
      let btnHtml = "";
      for (let color of data.colors) {
        displayHtml += `
        <div class="color-box" style="background-color: ${color.hex.value}"></div>
        `;
        btnHtml += `
        <button>${color.hex.value}</button>
        `;
      }

      displayContainer.innerHTML = displayHtml;
      hexcodesContainer.innerHTML = btnHtml;
    });
});
