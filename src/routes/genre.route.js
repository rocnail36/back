const express = require("express")
const genreRouter = express.Router()
const {
    addGenre,
    deleteGenre,
    getAllGenres,
    getOneGenre,
    updateGenre
} = require("../controllers/genre.controller")



genreRouter.route("/")
.get(getAllGenres)
.post(addGenre)


genreRouter.route("/:id")
.put(updateGenre)
.delete(deleteGenre)
.get(getOneGenre)

module.exports = genreRouter
