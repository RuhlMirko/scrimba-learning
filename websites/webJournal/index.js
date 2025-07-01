import data from "./data.js";

const projectEl = document.getElementById("projects");
const moreBtn = document.getElementById("more");
let moreBtnState = false; // Track if the button has been clicked

function renderData() {
  let count = 4; // Default to showing 4 items
  projectEl.innerHTML = ""; // Clear previous items
  moreBtnState = !moreBtnState; // Set the state to its opposite value
  if (moreBtnState) {
    moreBtn.textContent = "Show more"; // Change button text to "Show less"
  } else {
    moreBtn.textContent = "Show less"; // Change button text to "Show more"
    count = data.length; // Show all items if button is clicked again
  }

  const fragment = document.createDocumentFragment();
  data.slice(0, count).forEach((item) => {
    const projectItem = createProjectItem(item);
    fragment.appendChild(projectItem);
  });
  projectEl.appendChild(fragment);
}

function createProjectItem(item) {
  const div = document.createElement("div");
  const parentA = document.createElement("a");

  const p = document.createElement("p");
  const title = document.createElement("h3");
  const img = document.createElement("img");

  img.className = "img";
  title.className = "title";
  p.className = "description";

  img.src = item.imgSrc;
  img.alt = "Placeholder image";
  title.textContent = item.title;
  p.textContent = item.description;

  parentA.appendChild(img);
  parentA.appendChild(title);
  parentA.appendChild(p);
  div.appendChild(parentA);

  return div;
}

renderData(); // Show 4 items initially

moreBtn.addEventListener("click", () => renderData()); // Show all on click
