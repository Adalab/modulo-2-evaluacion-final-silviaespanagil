/* Al hacer clic sobre una serie se "favoritea"
[x]Color de fondo y fuente se intercambian (toggle?)
[]Agrega listado en parte izquierda con series seleccionadas
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
  const favoriteSeriesClicked = ev.currentTarget;
  favoriteSeriesClicked.classList.toggle("js-favorite");
  // de aqui para abajo podría hacerlo con localStorage
  if (favoriteSeriesClicked.classList.contains("js-favorite")) {
    const favSection = document.querySelector(".js-favArea");
    const newUl = document.createElement("ul");
    const favLi = favoriteSeriesClicked;
    favSection.appendChild(newUl);
    newUl.appendChild(favLi);
    newUl.classList.add("js-favoriteArea");
  }
}

//se repite por cada fav que sumo.
function classFavoriteSubtitle() {
  const favTitle = document.querySelector(".js-favTitle");
  const favTitleContent = document.createTextNode("Tus favoritos");
  favTitle.appendChild(favTitleContent);
}
/*¿cómo podría hacer  para que el elemento no se me repita infinitamente? si lo creo desde DOM.
Podría crear el section y el ul con clase hidden y retirarle la clase y solo sumar los li*/
