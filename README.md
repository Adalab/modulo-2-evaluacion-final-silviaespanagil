# Javascript evaluation: Series searcher

## _Search and save your favorite series_

¡Hola!

After some Javascript code digging here comes the chance to put it on on practice. This is a series searcher, the applications allows to search a TV serie by its name and to add it to a personal favorite list.✨ Here's a glimpse✨

<img src="https://user-images.githubusercontent.com/81619759/119475543-88c9f380-bd4d-11eb-9c80-5773ec929ee3.png" width="500"/>

## Requirements 📋

I was asked to develop a web application that:

- User can search a TV serie by name.
- The result of the search must show the name and a picture. from the serie fetched from the [TV Maze API](http://api.tvmaze.com).
- The user must be able to click on a serie to add it on "favorites".
- Favorite list must be in a column on the left.
- If the user refresh the browser, favorite list must remain.

## Extra features 🔥

- As a bonus: add a reset button to the favorite area that resets the shown list and the local storage.
- As another bonus: allow the user to eliminate a serie from his favorite area by clicking on the "x"

## Tech 💻

Starring:
[Adalab Web Starter Kit](https://github.com/Adalab/adalab-web-starter-kit) - An amazing template that allowed me to use a local host, SASS, HTML Template Engines and gulp. For more information you may visit [the Kit repository](https://github.com/Adalab/adalab-web-starter-kit)

<sub>[Node.js](https://nodejs.org/) and Gulp are required <sub/>

### Built with 🔨

- Visual Code Studio: as code editor
- HTML
- SASS
- Javascript

## Development ⌨️

For the development of this web application I used a flowchart to understand the user journey and develop my code following some logic. If you are curious about my train of thought you can check my flowchart in Spanish [here](https://docs.google.com/drawings/d/1ItGOm_rsoCbhgoTTHJCJtVWbsdBvrlXJGXwK8onAhl8/edit).

The main function is the fetch that will give us all the content for our dinamic website. With this information saved on a variable I rendered the website mainly using the DOM as a way of practice.

After the results were showing correctly I went for the "favorite" ⭐ function in which checking the id of the series I created a new array to render this area.

With the favorite series packed up in a variable I wrote down the localStorage so, whenever the user comeback his favorite series📺 will always be waiting for him.

## Want to clone my repository? 🐑🐑

Go for it! Rembember that you will need to:

1. Install dependencies. You will only have to do this once.

```sh
npm install
```

2. Start the proyect. This must be done everytime you code and will open a local host that will update in real time

```sh
npm start
```

## Do you have any idea? ✏️

I'm an student and am learning loads of things in Adalab's bootcamp, if you have any idea that I could develope or would like to explain me new and easier ways to develope this site, please tell me so and I will try to.

## License

MIT
