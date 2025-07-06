const getSchemeBtn = document.getElementById("get-scheme");
const schemeSelect = document.getElementById("scheme-selector");
const hexcodesContainer = document.getElementById("color-scheme-hexcodes");
const displayContainer = document.getElementById("color-scheme-display");
const baseColor = document.getElementById("base-color-picker");
let buttons = document.querySelectorAll("#color-scheme-hexcodes button");

getSchemeBtn.addEventListener("click", () => {
  const targetHex = baseColor.value.slice(1, 7).toUpperCase();
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${targetHex}&mode=${schemeSelect.value}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
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
      buttons = document.querySelectorAll("#color-scheme-hexcodes button");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          let strClip = button.textContent;
          navigator.clipboard.writeText(strClip).then(() => {
            console.log(strClip);
          });
        });
      });
    });
});

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied to clipboard: " + text);
  });
};
