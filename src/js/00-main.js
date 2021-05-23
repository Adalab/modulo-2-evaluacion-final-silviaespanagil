"use strict";

//Constantes

const searchButton = document.querySelector(".js-buttonSearch");
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
      for (const series of seriesList) {
        allSeries.push(series.show);
      }
    });
}

searchButton.addEventListener("click", search);
console.log(allSeries);
