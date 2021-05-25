//Make li clickable for favs

function makeLiClickable() {
  const allSeriesCards = document.querySelectorAll(".js-results");
  for (const seriesCard of allSeriesCards) {
    seriesCard.addEventListener("click", favoriteShow);
  }
}

// Identify Favorite Shows

function favoriteShow(ev) {
  const favShows = ev.currentTarget;

  //Take the ID
  const seriesId = parseInt(favShows.id);

  //Compare id with favoriteArray
  const foundSerie = allSeries.find((favorite) => favorite.id === seriesId);

  const favExist = favoriteSeries.find(
    (idFavorite) => idFavorite.id === seriesId
  );
  if (favExist === undefined) {
    favoriteSeries.push(foundSerie);
  } else {
    favoriteSeries = favoriteSeries.filter(
      (favorite) => favorite.id !== seriesId
    );
  }
  paintFav();
  //createList();
  setLocalStorage();
}
