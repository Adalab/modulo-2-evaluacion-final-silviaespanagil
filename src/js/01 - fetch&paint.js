let showdata = [];

//hago un fetch en funcion del input

function searchShow() {
  const userSearch = document.querySelector(".js-searchBox");
  const searchName = userSearch.value;
  const searchURL = "http://api.tvmaze.com/search/shows?q=" + searchName;
  const imageDefault =
    "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";

  fetch(searchURL)
    .then((response) => response.json())
    .then((data) => {
      for (const dataEl of data) {
        showdata.push(dataEl.show);
      }
      /*showdata = data.show;*/
      getLocalStorage();

      for (let i = 0; i < showdata.length; i++) {
        const seriesName = showdata[i].name;
        const seriesId = showdata[i].id;
        console.log(seriesId);
        let seriesImg =
          showdata[i].image === null ? imageDefault : showdata[i].image.medium;
        //creo la lista con los resultados
        function createList() {
          const imgEl = document.createElement("img");
          const seriesNameEl = document.createElement("h3");
          const seriesNameContent = document.createTextNode(seriesName);
          const ul = document.querySelector(".js-searchResult");
          const resultLi = document.createElement("li");

          resultLi.id = seriesId;
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
//creo un subtitulo solo para cuando se busca
function createSubtitle() {
  const searchSubtitle = document.querySelector(".js-resultArea");
  const searchSubtitleContent = document.createTextNode(
    "Estas son las series que coinciden con tu búsqueda"
  );
  searchSubtitle.appendChild(searchSubtitleContent);
}

//evitar que el enter haga algo
function submit(event) {
  event.preventDefault();
}

//handler del boton del form
function searchHandler() {
  searchShow();
  createSubtitle();
  makeLiClickable();
}

//eventos
form.addEventListener("submit", submit);
searchButton.addEventListener("click", searchHandler);
