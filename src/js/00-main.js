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

  paintFav();
  setLocalStorage();
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
    favLi.id = favoriteSeries[i].id;
    favLi.appendChild(favImg);
    favLi.appendChild(favDiv);
    favDiv.classList.add("js-favDiv");
    favLi.classList.add("js-favorite");
    favSection.classList.remove("js-hidden");
    favUl.classList.add("js-favoriteArea");
  }
}

//Add localStorage
function setLocalStorage() {
  localStorage.setItem("favoritesSeries", JSON.stringify(favoriteSeries));
}

//Get localStorage
function getLocal() {
  let getLocalFavorites = JSON.parse(localStorage.getItem("favoritesSeries"));

  if (getLocalFavorites !== null) {
    favoriteSeries = getLocalFavorites;
  }
  paintFav();
}

//delete favs

function deleteIcon() {
  const deleteIcons = document.querySelectorAll("small");
  for (const deleteIcon of deleteIcons) {
    favCard.addEventListener("click", deleteFav);
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

//handler de searchButtons
searchButton.addEventListener("click", search);
form.addEventListener("submit", preventSubmit);
getLocal();
