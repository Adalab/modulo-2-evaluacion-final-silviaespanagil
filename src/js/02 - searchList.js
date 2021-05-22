/* Pintar resultado del fetch en listado*/

function createSubti() {
  //crear subtítulo
  const searchSubtitle = document.querySelector(".js-resultArea");
  const searchSubtitleContent = document.createTextNode(
    "Estas son las series que coinciden con tu búsqueda"
  );
  searchSubtitle.appendChild(searchSubtitleContent);
}
//creo lista con image y nombre serie
function createList() {
  const ul = document.querySelector(".js-searchResult");
  const resultLi = document.createElement("li");

  console.log(resultLi);
}
paintResult();
