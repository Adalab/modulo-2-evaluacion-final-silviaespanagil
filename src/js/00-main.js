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

//delete favs

function deleteIcon() {
  const deleteIcons = document.querySelectorAll("small");
  for (const deleteIcon of deleteIcons) {
    favCard.addEventListener("click", deleteFav);
  }
}
