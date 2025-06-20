function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const websitesFolder = ["./websites/", "index.html"];
const websitesData = [
  "counter",
  "calculator",
  "digitalCard",
  "amazonClone",
  "spaceX",
  "GIFts",
  "homeTown",
  "basketball",
  "blackjack",
  "extension",
  "googleClone",
  "unitConverter",
  "Oldagram",
  "cookieConsent",
  "catMemePicker",
  "twiterClone",
  "orderingApp",
  "responsiveWeb",
  "gridImg",
];

const websitesUl = document.getElementById("websites-ul");
const htmlStr = websitesData
  .map((website) => {
    let websiteLi = `<li><a href="${websitesFolder[0]}${website}/${
      websitesFolder[1]
    }">${capitalize(website)}</li>`;
    return websiteLi;
  })
  .join("");

websitesUl.innerHTML = htmlStr;
