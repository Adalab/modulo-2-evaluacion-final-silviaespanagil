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
  const img = document.createElement("img");
  img.src = "https://memegenerator.net/img/instances/69209806.jpg";
  img.alt = "Poster de serie"; //esto cambia por variable img
}

//creo nombreserie
function createName() {}
//creo lista con image y nombre serie

function createList() {
  const ul = document.querySelector(".js-searchResult");
  const resultLi = document.createElement("li");

  console.log(resultLi);
}

//hago handler con todo lo que se pinta el handler seria la li que llama a la  img y al titulo?
