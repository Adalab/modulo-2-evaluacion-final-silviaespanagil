function searchShow() {
  const userSearch = document.querySelector(".js-searchBox");
  const searchName = userSearch.value;
  const searchURL = "http://api.tvmaze.com/search/shows?q=" + searchName;
  const imageDefault =
    "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";

  fetch(searchURL)
    .then((response) => response.json())
    .then((data) => {
      //sumo localStorage de  todo pero como me quedo solo con el fav
      localStorage.setItem("localtvseries", JSON.stringify(data));
      for (let i = 0; i < data.length; i++) {
        const seriesName = data[i].show.name;
        const seriesId = data[i].show.id;
        console.log(seriesId);
        let seriesImg =
          data[i].show.image === null
            ? imageDefault
            : data[i].show.image.medium;

        function createList() {
          const imgEl = document.createElement("img");
          const seriesNameEl = document.createElement("h3");
          const seriesNameContent = document.createTextNode(seriesName);
          const ul = document.querySelector(".js-searchResult");
          const resultLi = document.createElement("li");

          imgEl.src = seriesImg;
          imgEl.alt = "Poster de serie";
          seriesNameEl.appendChild(seriesNameContent);
          ul.appendChild(resultLi);
          resultLi.appendChild(imgEl);
          resultLi.appendChild(seriesNameEl);

          resultLi.classList.add("js-results");
          resultLi.classList.add("js-results-color");
          seriesNameEl.classList.add("js-series-name");
        }
        makeLiClickable();
        createList();
      }
    });
}

function createSubtitle() {
  const searchSubtitle = document.querySelector(".js-resultArea");
  const searchSubtitleContent = document.createTextNode(
    "Estas son las series que coinciden con tu búsqueda"
  );
  searchSubtitle.appendChild(searchSubtitleContent);
}

function searchHandler() {
  searchShow();
  createSubtitle();
  makeLiClickable();
}
searchButton.addEventListener("click", searchHandler);
