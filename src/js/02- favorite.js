/* Al hacer clic sobre una serie se "favoritea"
[]Color de fondo y fuente se intercambian (toggle? - no puedo pq tengo mas cosas en la clase, ¿las separo?)
[]Agrega listado en parte izquierda con series seleccionadas
[]Si la usuaria realiza otra búsqueda los favoritos no se pierden
*/

//hacer cada li clickable
function makeLiClickable() {
  const allSeriesInfo = document.querySelectorAll(".js-results");
  for (const seriesInfo of allSeriesInfo) {
    seriesInfo.addEventListener("click", handlerFavorites);
  }
}

function changeClass() {}
function handlerFavorites() {}
