/* Al hacer clic sobre una serie se "favoritea"
[x]Color de fondo y fuente se intercambian (toggle?)
[x]Agrega listado en parte izquierda con series seleccionadas
[]Si la usuaria realiza otra búsqueda los favoritos no se pierden
*/

//hacer cada li clickable
function makeLiClickable() {
  const allSeriesInfo = document.querySelectorAll(".js-results");
  for (const seriesInfo of allSeriesInfo) {
    seriesInfo.addEventListener("click", classFavorite);
  }
}

function classFavorite(ev) {
  //tomo el favorito por click
  const favoriteSeriesClicked = ev.currentTarget;
  favoriteSeriesClicked.classList.toggle("js-favorite");

  //pinto el favorito en nueva columna
  if (favoriteSeriesClicked.classList.contains("js-favorite")) {
    const favSection = document.querySelector(".js-favArea");
    const newUl = document.querySelector(".js-searchFavs");
    const favLi = favoriteSeriesClicked;
    newUl.appendChild(favLi);
    favSection.classList.remove("js-hidden");
    newUl.classList.add("js-favoriteArea");
  }
}
