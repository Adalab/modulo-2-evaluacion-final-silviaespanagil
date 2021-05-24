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
