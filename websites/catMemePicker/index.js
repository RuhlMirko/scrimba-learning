import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

memeModalCloseBtn.addEventListener("click", closeModal);
getImageBtn.addEventListener("click", renderCat);

function closeModal() {
  memeModal.style.display = "none";
}

function renderCat() {
  if (document.getElementById("one-only-option").checked) {
    const catObject = getSingleCatObject();
    memeModalInner.innerHTML = `
    <img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}"
    >
    `;
  } else {
    const catObject = Array(getMoreCatObject());
    let finalHtml = "";
    console.log(catObject[0], catObject[0].length);
    for (let i in catObject[0]) {
      console.log(catObject[0][i]);
      finalHtml += `
        <img 
        class="cat-img" 
        src="./images/${catObject[0][i].image}"
        alt="${catObject[0][i].alt}"
        >       
        `;
    }
    memeModalInner.innerHTML = finalHtml;
  }

  memeModal.style.display = "flex";
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();

  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}

function getMoreCatObject() {
  const catsArray = getMatchingCatsArray();
  return catsArray;
}

function getMatchingCatsArray() {
  if (document.querySelector("select")) {
    const selectedEmotion = document.querySelector("select").value;
    const isGif = gifsOnlyOption.checked;

    const matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingCatsArray;
  }
}

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let finalHtml = `<select class="radio">`;
  let emotionItems = "";

  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    emotionItems += `<option value='${emotion}'>${emotion}</option>`;
  }

  finalHtml += `${emotionItems}</select>`;
  emotionRadios.innerHTML = finalHtml;
}

renderEmotionsRadios(catsData);
