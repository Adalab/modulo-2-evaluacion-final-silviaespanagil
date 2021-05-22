"use strict";
console.log(":D");

/* [x]Usuario debe poder buscar
[x] API responde con resultado
[x] Para que api responda debo enviar URL personalizada
[x] El resultado de la API que me interesa es: imagen de la serie y título.
[x] Si la API no tiene imagen debo colocar una por default * https://via.placeholder.com/210x295/ffffff/666666/?text=TV * 
-- root URL http://api.tvmaze.com
-- show search url /search/shows?q=query
-- important data: name and image.medium
*/
const searchButton = document.querySelector(".js-buttonSearch");
let seriesData = [];

function searchShow() {
  const userSearch = document.querySelector(".js-searchBox");
  const searchName = userSearch.value;
  const imageDefault =
    "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
  fetch("http://api.tvmaze.com/search/shows?q=" + searchName)
    .then((response) => response.json())
    .then((data) => {
      seriesData = data;
      console.log(seriesData);
    });
}
searchButton.addEventListener("click", searchShow);
