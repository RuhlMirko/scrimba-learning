const searchBar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const resultsSection = document.getElementById("results");
const suggestionsDiv = document.getElementById("suggestions");

searchBtn.addEventListener("click", () => {
  suggestionsDiv.innerHTML = "";
  const query = searchBar.value.trim();
  const fragment = document.createDocumentFragment();

  fetch(`https://www.omdbapi.com/?s=${query}&apikey=9f4618dc&plot=full`)
    .then((res) => res.json())
    .then((data) => {
      resultsSection.innerHTML = ""; // Clear previous results

      if (data.Search) {
        // Collect all fetch promises
        const detailPromises = data.Search.map((movie) =>
          fetch(
            `https://www.omdbapi.com/?t=${movie.Title}&apikey=9f4618dc&plot=full`
          )
            .then((res) => res.json())
            .then((movieData) => {
              fragment.appendChild(createDiv(movieData));
            })
        );

        // Wait for all fetches to finish, then append the fragment
        Promise.all(detailPromises).then(() => {
          resultsSection.appendChild(fragment);
        });
      } else {
        resultsSection.innerHTML = ""; // Clear previous results
        const noResults = document.createElement("p");
        noResults.textContent = "No results found.";
        noResults.classList.add("placeholder");
        fragment.appendChild(noResults);
        resultsSection.appendChild(fragment);
      }
    });
});

searchBar.addEventListener("input", () => {
  const query = searchBar.value.trim();
  suggestionsDiv.innerHTML = ""; // Clear previous suggestions

  fetch(`https://www.omdbapi.com/?s=${query}&apikey=9f4618dc`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Search) {
        data.Search.forEach((movie) => {
          const suggestionItem = document.createElement("div");
          suggestionItem.textContent = movie.Title;
          suggestionItem.addEventListener("click", () => {
            searchBar.value = movie.Title;
            suggestionsDiv.innerHTML = ""; // Clear suggestions
          });
          suggestionsDiv.appendChild(suggestionItem);
        });
      }
    });
});

function createDiv(movieData) {
  const div = document.createElement("div");
  div.classList.add("movie");
  const poster = document.createElement("img");

  poster.src = movieData.Poster;
  console.log(movieData);
  poster.onerror = () => {
    poster.src = "./placeholder.png";
  };

  const descDiv = document.createElement("div");
  const description = document.createElement("p");
  const title = document.createElement("h3");
  const detailsDiv = document.createElement("div");
  const watchTime = document.createElement("p");
  const genre = document.createElement("p");
  const addBtn = document.createElement("button");

  title.textContent = `${movieData.Title} ⭐ ${movieData.imdbRating} (${movieData.imdbVotes} votes)`;
  description.textContent = movieData.Plot;
  detailsDiv.classList.add("details");
  watchTime.textContent = movieData.Runtime;
  genre.textContent = movieData.Genre + " - Rated: " + movieData.Rated;
  addBtn.textContent = "Add to My Watchlist";

  div.appendChild(poster);

  descDiv.appendChild(title);

  descDiv.appendChild(detailsDiv);
  detailsDiv.appendChild(watchTime);
  detailsDiv.appendChild(genre);
  detailsDiv.appendChild(addBtn);
  descDiv.appendChild(description);

  div.appendChild(descDiv);

  return div;
}

function saveToLocal(obj) {
  localStorage.setItem();
}

function getLocal() {}
