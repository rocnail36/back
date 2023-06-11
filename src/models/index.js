const Movie = require("./Movie")
const Director = require("./Director")
const Genre = require("./Genre")
const Actor = require("./Actor")

Movie.belongsToMany(Actor, {through : "movieActors"})
Actor.belongsToMany(Movie, {through: "movieActors"})

Movie.belongsToMany(Genre, {through: "movieGenres"})
Genre.belongsToMany(Movie, {through: "movieGenres"})

Movie.belongsToMany(Director,{through: "movieDirectors"})
Director.belongsToMany(Movie,{through: "movieDirectors"})


