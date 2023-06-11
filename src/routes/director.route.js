const express = require("express")
const directorRouter = express.Router()
const {
    addDirector,
    deleteDirector,
    getAllDirectors,
    getOneDirector,
    updateDirector
} = require("../controllers/director.controller")

directorRouter.route("/")
.get(getAllDirectors)
.post(addDirector)

directorRouter.route("/:id")
.put(updateDirector)
.delete(deleteDirector)
.get(getOneDirector)

module.exports = directorRouter

