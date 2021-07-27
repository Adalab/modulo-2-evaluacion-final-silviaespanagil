//API fetch

function search() {
  const apiBase = "https://api.tvmaze.com/search/shows?q=";
  const searchInput = document.querySelector(".js-searchBox");
  const userSearch = searchInput.value;
  const apiVariable = apiBase + userSearch;
  fetch(apiVariable)
    .then((response) => response.json())
    .then((data) => {
      const seriesList = data;
      allSeries = [];
      for (const series of seriesList) {
        allSeries.push(series.show);
      }
      createList();
      makeLiClickable();
    });
}
