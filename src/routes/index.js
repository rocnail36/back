const express = require('express');
const router = express.Router();
const actorRouter = require("./actor.route")
const movieRouter = require("./movie.route")
const directorRouter = require("./director.route")
const genreRouter = require("./genre.route")
// colocar las rutas aquí


router.use("/actors", actorRouter)

router.use("/movies", movieRouter)

router.use("/genres", genreRouter)

router.use("/directors", directorRouter)


module.exports = router;