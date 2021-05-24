//Reset ul with new search

function resultReset() {
  ulResults.innerHTML = "";
}
function favReset() {
  favUl.innerHTML = "";
}

function resetFav() {
  localStorage.clear();
  favoriteSeries = [];
  favReset();
  favSection.classList.add("js-hidden");
}

//delete favs

function deleteIcon(i) {
  const deleteIcons = document.querySelectorAll("small");
  for (const deleteIcon of deleteIcons) {
    favCard.addEventListener("click", deleteFav);
  }
}

//Remove form default
function preventSubmit(event) {
  event.preventDefault();
}
