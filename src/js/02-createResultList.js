//Paint HTML Results

function createList() {
  resultReset();

  for (let i = 0; i < allSeries.length; i++) {
    let seriesImg =
      allSeries[i].image === null ? defaultImage : allSeries[i].image.medium;
    const seriesId = allSeries[i].id;
    const resultLi = document.createElement("li");
    const imgEl = document.createElement("img");
    const seriesNameEl = document.createElement("h3");
    const seriesNameContent = document.createTextNode(`${allSeries[i].name}`);
    imgEl.src = seriesImg;
    imgEl.alt = "`${allSeries[i].name}`";
    seriesNameEl.appendChild(seriesNameContent);
    ulResults.appendChild(resultLi);
    resultLi.id = seriesId;
    resultLi.appendChild(imgEl);
    resultLi.appendChild(seriesNameEl);

    // si es favorita resultLi.classList.add("js-favorite");
    resultLi.classList.add("js-results");
    resultLi.classList.add("js-results-color");
    seriesNameEl.classList.add("js-series-name");
  }
}
