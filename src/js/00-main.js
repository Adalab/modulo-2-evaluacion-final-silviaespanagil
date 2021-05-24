"use strict";

//Constantes

const searchButton = document.querySelector(".js-buttonSearch");
const form = document.querySelector(".js-form");
const ulResults = document.querySelector(".js-searchResult");

const favUl = document.querySelector(".js-searchFavs");
const defaultImage =
  "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
let allSeries = [];
let favoriteSeries = [];

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
      createList();
      makeLiClickable();
    });
}

//Paint HTML Results

function createList() {
  resultReset();

  for (let i = 0; i < allSeries.length; i++) {
    let seriesImg =
      allSeries[i].image === null ? defaultImage : allSeries[i].image.medium;
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

    // si es favorita resultLi.classList.add("js-favorite");
    resultLi.classList.add("js-results");
    resultLi.classList.add("js-results-color");
    seriesNameEl.classList.add("js-series-name");
  }
}

//Make li clickable for favs
function makeLiClickable() {
  const allSeriesCards = document.querySelectorAll(".js-results");
  for (const seriesCard of allSeriesCards) {
    seriesCard.addEventListener("click", favoriteShow);
  }
}
// Identify Favorite Shows
function favoriteShow(ev) {
  //tomo el favorito por click
  const favShows = ev.currentTarget;
  console.log("current", favShows);
  //fav array
  const seriesId = parseInt(favShows.id);

  const favExist = favoriteSeries.find(
    (idFavorite) => idFavorite.id === seriesId
  );
  if (favExist === undefined) {
    const foundSerie = allSeries.find((favorite) => favorite.id === seriesId);
    favoriteSeries.push(foundSerie);
  } else {
    favoriteSeries = favoriteSeries.filter(
      (idFavorite) => idFavorite.id !== seriesId
    );
  }
  //const isFavorite = favoriteSeries.find;
  //(idFavorite) => idFavorite === seriesId;
  paintFav();

  // repintar series normales
  // repintar favoritos
  // guardar en el local storage
}

// Paint HTML Favorites

function paintFav() {
  favReset();
  for (let i = 0; i < favoriteSeries.length; i++) {
    let favSeriesImg =
      favoriteSeries[i].image === null
        ? defaultImage
        : favoriteSeries[i].image.medium;
    const favSection = document.querySelector(".js-favArea");
    const small = document.createElement("small");
    const favLi = document.createElement("li");
    const favImg = document.createElement("img");
    const favDiv = document.createElement("div");
    const favSeriesName = document.createElement("h3");
    const smallContent = document.createTextNode("[x]");
    const favSeriesNameContent = document.createTextNode(
      `${favoriteSeries[i].name}`
    );
    favImg.src = favSeriesImg;
    favImg.alt = "`${favoriteSeries[i].name}`";

    favDiv.appendChild(favSeriesName);
    favDiv.appendChild(small);
    small.appendChild(smallContent);
    favSeriesName.appendChild(favSeriesNameContent);
    favUl.appendChild(favLi);
    favLi.id = favoriteSeries.id;
    favLi.appendChild(favImg);
    favLi.appendChild(favDiv);
    favDiv.classList.add("js-favDiv");
    favLi.classList.add("js-favorite");
    favSection.classList.remove("js-hidden");
    favUl.classList.add("js-favoriteArea");
  }
}

//Reset ul with new search

function resultReset() {
  ulResults.innerHTML = "";
}
function favReset() {
  favUl.innerHTML = "";
}

//Remove form default
function preventSubmit(event) {
  event.preventDefault();
}

//handler de searchButton

searchButton.addEventListener("click", search);
form.addEventListener("submit", preventSubmit);
console.log(favoriteSeries);
