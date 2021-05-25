//Reset ul with new search

function resultReset() {
  ulResults.innerHTML = "";
}
function favReset() {
  favUl.innerHTML = "";
  search();
}

function resetFav() {
  localStorage.clear();
  favoriteSeries = [];
  favReset();
  favSection.classList.add("js-hidden");
}

//delete favs

/*function deleteIcon() {
  const deleteIcons = document.querySelectorAll("small");
  for (const deleteIcon of deleteIcons) {
    deleteIcon.addEventListener("click", favoriteShow);
  }
}*/

//Remove form default
function preventSubmit(event) {
  event.preventDefault();
}
