/* Pintar resultado del fetch en listado*/

//crear subtítulo
function createSubtitle() {
  const searchSubtitle = document.querySelector(".js-resultArea");
  const searchSubtitleContent = document.createTextNode(
    "Estas son las series que coinciden con tu búsqueda"
  );
  searchSubtitle.appendChild(searchSubtitleContent);
}

//creo image
function createImage() {
  const imgEl = document.createElement("img");
  imgEl.src = seriesImg;
  imgEl.alt = "Poster de serie"; //esto cambia por variable img
}

//creo nombreserie
function createName() {
  const seriesNameEl = document.createElement("h3");
  const seriesNameContent = document.createTextNode(seriesName);
  seriesNameEl.appendChild(seriesNameContent);
}
//creo lista con image y nombre serie

function createList() {
  const ul = document.querySelector(".js-searchResult");
  const resultLi = document.createElement("li");
  ul.appendChild(resultLi);
  resultLi.appendChild(createImage());
  resultLi.appendChild(createName());
}
