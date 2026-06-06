function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const websitesFolder = ["./websites/", "index.html"];
const websitesData = [
  "accesibilty",
  "amazonClone",
  "audio",
  "basketball",
  "bento-grids",
  "blackJack",
  "calculator",
  "catMemePicker",
  "claudeChef",
  "colorScheme",
  "componentsLibrary",
  "compoundComponents",
  "contextLearning",
  "cookieConsent",
  "counter",
  "digitalCard",
  "extension",
  "firstApiRequest",
  "GIFts",
  "googleClone",
  "gridImg",
  "homeTown",
  "language-hangman",
  "mobile",
  "new-extension",
  "Oldagram",
  "orderingApp",
  "passwordGen",
  "perfomanceReact",
  "responsiveWeb",
  "responsiveWeb2",
  "spaceX",
  "tenzies",
  "travel",
  "twiterClone",
  "unitConverter",
  "vans",
  "warCardsGame",
  "webJournal",
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
