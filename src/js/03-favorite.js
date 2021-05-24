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

  const favExist = favoriteSeries.find(
    (idFavorite) => idFavorite.id === seriesId
  );
  if (favExist === undefined) {
    const foundSerie = allSeries.find((favorite) => favorite.id === seriesId);
    favoriteSeries.push(foundSerie);
  } else {
    favoriteSeries = favoriteSeries.filter(
      (idFavorite) => idFavorite.id !== seriesId
    );
  }

  paintFav();
  setLocalStorage();
}
