"use strict";

//Constantes

const searchButton = document.querySelector(".js-buttonSearch");
const form = document.querySelector(".js-form");
const ulResults = document.querySelector(".js-searchResult");
let allSeries = []; //consolelog da ok

//API fetch
function search() {
  const apiBase = "http://api.tvmaze.com/search/shows?q=";
  const searchInput = document.querySelector(".js-searchBox");
  const userSearch = searchInput.value;
  const apiVariable = apiBase + userSearch;
  fetch(apiVariable)
    .then((response) => response.json())
    .then((data) => {
      const seriesList = data;
      allSeries = [];
      for (const series of seriesList) {
        allSeries.push(series.show);
      }
      resultReset();
      createList();
      makeLiClickable();
    });
}

//Paint HTML

function createList() {
  const defaultImage =
    "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";

  for (let i = 0; i < allSeries.length; i++) {
    let seriesImg =
      allSeries[i].image === null
        ? defaultImage
        : allSeries[i].image.medium; /*allSeries[i].image.medium;*/
    const seriesId = allSeries[i].id;
    const resultLi = document.createElement("li");
    const imgEl = document.createElement("img");
    const seriesNameEl = document.createElement("h3");
    const seriesNameContent = document.createTextNode(`${allSeries[i].name}`);
    imgEl.src = seriesImg;
    imgEl.alt = "`${allSeries[i].name}`";
    seriesNameEl.appendChild(seriesNameContent);
    ulResults.appendChild(resultLi);
    resultLi.id = seriesId;
    resultLi.appendChild(imgEl);
    resultLi.appendChild(seriesNameEl);
    resultLi.classList.add("js-results");
    resultLi.classList.add("js-results-color");
    seriesNameEl.classList.add("js-series-name");
  }
}

//Creo subtítulo búsqueda
function createSubtitle() {
  const searchSubtitle = document.querySelector(".js-resultArea");
  const searchSubtitleContent = document.createTextNode(
    "Estas son las series que coinciden con tu búsqueda"
  );
  searchSubtitle.appendChild(searchSubtitleContent);
}

//Make li clickable for favs
function makeLiClickable() {
  const allSeriesCards = document.querySelectorAll(".js-results");
  for (const seriesCard of allSeriesCards) {
    seriesCard.addEventListener("click", favoriteShow);
  }
}
//Favorite
let favoriteSeries = [];

function favoriteShow(ev) {
  //tomo el favorito por click
  const allShows = ev.currentTarget;
  allShows.classList.add("js-favorite");

  //fav array
  const seriesId = allShows.id;
  const favExist = favoriteSeries.find((idFavorite) => idFavorite === seriesId);
  if (favExist === undefined) {
    favoriteSeries.push(seriesId);
  } else {
    favoriteSeries = favoriteSeries.filter(
      (idFavorite) => idFavorite !== seriesId
    );
  }
  console.log(favoriteSeries);

  //paint fav column pero si lo quito no la saca
  if (allShows.classList.contains("js-favorite")) {
    const favSection = document.querySelector(".js-favArea");
    const newUl = document.querySelector(".js-searchFavs");
    //const erase = document.createElement("img");
    const favLi = allShows;

    //erase.src = "../assets/images/eliminate.png";
    //erase.width = "30";

    newUl.appendChild(favLi);
    //favLi.appendChild(erase);

    favSection.classList.remove("js-hidden");
    newUl.classList.add("js-favoriteArea");
  }
}

//Reset ul with new search

function resultReset() {
  ulResults.innerHTML = "";
}

//Remove form default
function preventSubmit(event) {
  event.preventDefault();
}

//handler de searchButton

searchButton.addEventListener("click", search);
form.addEventListener("submit", preventSubmit);
console.log(allSeries);
