//Paint HTML Results

function createList() {
  resultReset();

  const filteredSeries = allSeries;

  for (let i = 0; i < filteredSeries.length; i++) {
    let seriesImg =
      allSeries[i].image === null ? defaultImage : allSeries[i].image.medium;
    const seriesId = allSeries[i].id;
    const resultLi = document.createElement("li");
    const imgEl = document.createElement("img");
    const seriesNameEl = document.createElement("h3");
    const seriesTime = document.createElement("p");

    const seriesTimeContent = document.createTextNode(
      `${allSeries[i].schedule.time}`
    );
    const seriesNameContent = document.createTextNode(allSeries[i].name);
    imgEl.src = seriesImg;
    imgEl.alt = "(allSeries[i].name)";

    seriesTime.appendChild(seriesTimeContent);
    seriesNameEl.appendChild(seriesNameContent);
    ulResults.appendChild(resultLi);
    resultLi.id = seriesId;
    resultLi.appendChild(imgEl);
    resultLi.appendChild(seriesNameEl);
    resultLi.appendChild(seriesTime);

    resultLi.classList.add("js-results");
    resultLi.classList.add("js-results-color");
    seriesNameEl.classList.add("js-series-name");
    const favExist = favoriteSeries.find(
      (idFavorite) => idFavorite.id === seriesId
    );
    if (favExist !== undefined) {
      resultLi.classList.add("js-favorite2");
    } else {
      resultLi.classList.remove("js-favorite2");
    }
  }
}

function createLog() {
  console.log("Me han clickado");
  for (let i = 0; i < allSeries.length; i++) {
    console.log(allSeries[i].name);
  }
}

//evento

const buttonLog = document.querySelector(".js-buttonSearchLog");
buttonLog.addEventListener("click", createLog);
