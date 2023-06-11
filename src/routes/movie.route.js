const express = require("express")
const movieRouter = express.Router()
const  {
    addMovie,
    deleteMovie,
    getAllMovies,
    getOneMovie,
    updateMovie,
    setActors,
    setGenres,
    setDirectors
} = require("../controllers/movie.controller")

movieRouter.route("/")
.get(getAllMovies)
.post(addMovie)

movieRouter.route("/:id")
.get(getOneMovie)
.put(updateMovie)
.delete(deleteMovie)


movieRouter.route("/:id/actors")
.post(setActors)

movieRouter.route("/:id/genres")
.post(setGenres)

movieRouter.route("/:id/directors")
.post(setDirectors)

module.exports = movieRouter


