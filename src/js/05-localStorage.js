//Add localStorage
function setLocalStorage() {
  localStorage.setItem("favoritesSeries", JSON.stringify(favoriteSeries));
}

//Get localStorage
function getLocal() {
  let getLocalFavorites = JSON.parse(localStorage.getItem("favoritesSeries"));

  if (getLocalFavorites !== null) {
    favoriteSeries = getLocalFavorites;
  }
  paintFav();
}
