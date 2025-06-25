import data from "./data.js";

const projectEl = document.getElementById("projects");
const fragment = document.createDocumentFragment();

const renderData = function (start = true) {
  data.forEach((item, index) => {
    if (!start || index >= 4) return;

    const projectItem = createProjectItem(item);
    fragment.appendChild(projectItem);
    projectEl.appendChild(fragment);
  });
};

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

renderData();
