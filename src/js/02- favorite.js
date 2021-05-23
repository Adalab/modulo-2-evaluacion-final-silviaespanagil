/* Al hacer clic sobre una serie se "favoritea"
[x]Color de fondo y fuente se intercambian (toggle?)
[x]Agrega listado en parte izquierda con series seleccionadas
[]Si la usuaria realiza otra búsqueda los favoritos no se pierden
*/
//hacer cada li clickable

/*let favShow = [];

function makeLiClickable() {
  const allSeriesInfo = document.querySelectorAll(".js-results");
  for (const seriesInfo of allSeriesInfo) {
    seriesInfo.addEventListener("click", classFavorite);
  }
}

function classFavorite(ev) {
  //tomo el favorito por click
  const allShows = ev.currentTarget;
  allShows.classList.add("js-favorite");

  //guardo la información del fav para pushear nuevo array
  const idSelected = allShows.id;
  const seriesInfo = showdata.find((serie) => showdata.id === allShows.id);
  console.log(seriesInfo); //me da undefined

  //pinto el favorito en nueva columna
  if (allShows.classList.contains("js-favorite")) {
    const favSection = document.querySelector(".js-favArea");
    const newUl = document.querySelector(".js-searchFavs");
    const erase = document.createElement("img");
    const favLi = allShows;

    erase.src = "../assets/images/eliminate.png";
    erase.width = "30";

    newUl.appendChild(favLi);
    favLi.appendChild(erase);

    favSection.classList.remove("js-hidden");
    newUl.classList.add("js-favoriteArea");
  }
}
const favorites = showdata.filter((favorite) => jj);
*/
