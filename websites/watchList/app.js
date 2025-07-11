const searchBar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const resultsSection = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const query = searchBar.value.trim();
  console.log(query);

  fetch(`https://www.omdbapi.com/?s=${query}&apikey=9f4618dc`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      resultsSection.innerHTML = ""; // Clear previous results
      const fragment = document.createDocumentFragment();
      if (data.Search) {
        data.Search.forEach((movie) => {
          const movieDiv = document.createElement("div");
          movieDiv.classList.add("movie");

          const title = document.createElement("h3");
          title.textContent = movie.Title;

          const year = document.createElement("p");
          year.textContent = `Year: ${movie.Year}`;

          const poster = document.createElement("img");
          poster.src = movie.Poster;
          poster.alt = `${movie.Title} Poster`;

          movieDiv.appendChild(poster);
          movieDiv.appendChild(title);
          movieDiv.appendChild(year);

          fragment.appendChild(movieDiv);
        });
      } else {
        resultsSection.innerHTML = ""; // Clear previous results
        const noResults = document.createElement("p");
        noResults.textContent = "No results found.";
        noResults.classList.add("placeholder");
        fragment.appendChild(noResults);
      }
      resultsSection.appendChild(fragment);
    });
});

searchBar.addEventListener("input", () => {
  const query = searchBar.value.trim();
  const suggestionsDiv = document.getElementById("suggestions");
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
