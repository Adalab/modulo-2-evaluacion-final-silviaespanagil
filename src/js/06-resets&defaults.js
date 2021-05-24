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

//Remove form default
function preventSubmit(event) {
  event.preventDefault();
}
