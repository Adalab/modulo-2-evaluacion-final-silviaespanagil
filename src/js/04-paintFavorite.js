// Paint HTML Favorites

function paintFav() {
  favReset();
  for (let i = 0; i < favoriteSeries.length; i++) {
    let favSeriesImg =
      favoriteSeries[i].image === null
        ? defaultImage
        : favoriteSeries[i].image.medium;
    const favSection = document.querySelector(".js-favArea");
    const small = document.createElement("small");
    const favLi = document.createElement("li");
    const favImg = document.createElement("img");
    const favDiv = document.createElement("div");
    const favSeriesName = document.createElement("h3");
    const smallContent = document.createTextNode("[x]");
    const favSeriesNameContent = document.createTextNode(
      `${favoriteSeries[i].name}`
    );
    favImg.src = favSeriesImg;
    favImg.alt = "`${favoriteSeries[i].name}`";

    favDiv.appendChild(favSeriesName);
    favDiv.appendChild(small);
    small.appendChild(smallContent);
    favSeriesName.appendChild(favSeriesNameContent);
    favUl.appendChild(favLi);
    favLi.id = favoriteSeries[i].id;
    favLi.appendChild(favImg);
    favLi.appendChild(favDiv);
    favDiv.classList.add("js-favDiv");
    favLi.classList.add("js-favorite");
    favSection.classList.remove("js-hidden");
    favUl.classList.add("js-favoriteArea");
  }
}
