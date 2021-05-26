//Make li clickable for favs

function makeLiClickable() {
  const allSeriesCards = document.querySelectorAll(".js-results");
  for (const seriesCard of allSeriesCards) {
    seriesCard.addEventListener("click", favoriteShow);
  }
}

//Make delete clickable for favs

function deleteIcon() {
  const deleteIcons = document.querySelectorAll("small");
  for (const deleteIcon of deleteIcons) {
    deleteIcon.addEventListener("click", deleteFav);
  }
}

//Delete fav
function deleteFav(event) {
  console.log("hice clic");
  const xFav = parseInt(event.currentTarget.id);

  console.log(xFav);
  favoriteSeries = favoriteSeries.filter((favorite) => favorite.id !== xFav);
  paintFav();
  setLocalStorage();
}
// Identify Favorite Shows

function favoriteShow(ev) {
  const favShows = ev.currentTarget;

  //Take the ID
  const seriesId = parseInt(favShows.id);
  console.log(seriesId);
  //Compare id with favoriteArray
  const foundSerie = allSeries.find((favorite) => favorite.id === seriesId);

  const favExist = favoriteSeries.find((favorite) => favorite.id === seriesId);
  if (favExist === undefined) {
    favoriteSeries.push(foundSerie);
  } else {
    favoriteSeries = favoriteSeries.filter(
      (favorite) => favorite.id !== seriesId
    );
  }
  paintFav();
  search();
  setLocalStorage();
}
