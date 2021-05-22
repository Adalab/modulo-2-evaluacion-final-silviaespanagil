/* Al hacer clic sobre una serie se "favoritea"
[]Color de fondo y fuente se intercambian (toggle?)
[]Agrega listado en parte izquierda con series seleccionadas
[]Si la usuaria realiza otra búsqueda los favoritos no se pierden
*/

//hacer cada li clickable

const serie = document.querySelectorAll(".js-results");
serie.forEach((li) => {
  li.addEventListener("click", makefavorite);
});
