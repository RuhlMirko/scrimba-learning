import data from "./data.js";

const projectEl = document.getElementById("projects");
const fragment = document.createDocumentFragment();

for (let i of data) {
  const div = document.createElement("div");
  const parentA = document.createElement("a");

  const p = document.createElement("p");
  const title = document.createElement("h3");
  const img = document.createElement("img");

  img.className = "img";
  title.className = "title";
  p.className = "description";

  img.src = i.imgSrc;
  img.alt = "Placeholder image";
  title.textContent = i.title;
  p.textContent = i.description;

  parentA.appendChild(img);
  parentA.appendChild(title);
  parentA.appendChild(p);

  div.appendChild(parentA);
  fragment.appendChild(div);
  projectEl.appendChild(fragment);
}
