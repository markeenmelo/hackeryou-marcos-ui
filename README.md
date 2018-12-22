# Marcos` HackerYou Final Project

## Movie Database UI

This projects read/write [Movie Database API](https://hackeryou-marcos-api.herokuapp.com/).

`Show Movies` render the API response. The button `Remove Movie` remove the movie from MongoDB.
`Add Movie` post new movies to the API.

## Heroku samples

`API` -> https://hackeryou-marcos-api.herokuapp.com/

`UI` -> https://hackeryou-marcos-ui.herokuapp.com/

## To Do

* Improve UI.
* Add form validation.


## Test, Build and Run

The project is built using [NodeJS 10.14.x](https://nodejs.org/en/), [React](https://reactjs.org/) and [Material-UI](https://material-ui.com/)
 
You therefore need to install NodeJS.

### NPM

The standard yarn command should be used :

* `npm install` to download all dependencies declared in the `package.json` file,  
* `npm start` to start the project and shows the page.

### Add Movies
`Title` -> String (eg.: Avengers: Infinity War)

`Year Released` -> Number (eg.: 2018)

`Rate` -> Number (eg.: 10)

`Poster URL` -> String (eg.: https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg)

`Overview` -> String (eg.: As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.)
