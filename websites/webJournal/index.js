import data from "./data.js";

const projectEl = document.getElementById("projects");
const moreBtn = document.getElementById("more");
let moreBtnState = true; // Track if the button has been clicked

function renderData(count) {
  projectEl.innerHTML = ""; // Clear previous items
  moreBtnState = !moreBtnState; // Set the state to its opposite value
  if (moreBtnState) {
    moreBtn.textContent = "Show less"; // Change button text to "Show less"
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

renderData(4); // Show 4 items initially

moreBtn.addEventListener("click", () => renderData(data.length)); // Show all on click
