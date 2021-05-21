"use strict";
console.log(":D");

/* []Usuario debe poder buscar
[] API responde con resultado
[] Para que api responda debo enviar URL personalizada
[] El resultado de la API que me interesa es: imagen de la serie y título.
[] Si la API no tiene imagen debo colocar una por default * https://via.placeholder.com/210x295/ffffff/666666/?text=TV * 
-- root URL http://api.tvmaze.com
-- show search url /search/shows?q=:query
-- important data: name and image.medium
*/

function searchShow() {
  const userSearch = document.querySelector(".js-searchBox");
  const searchName = userSearch.value;

  fetch("http://api.tvmaze.com/search/shows?q=:" + searchName)
    .then((response) => response.json())
    .then((data) => {
      const apiAnswer = data.results;
      for (let i = 0; i < arrayResults.length; i++) {
        const seriesName = apiAnswer[i].name;
        const seriesImg = apiAnswer[i].image.medium;
      }
    });
}
