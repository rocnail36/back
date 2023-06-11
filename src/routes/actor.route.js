const express = require("express")
const actorRouter = express.Router()
const {
getAllActors,
addActor,
deleteActor,
getOneActor,
updateActor} =require("../controllers/actor.controller")


actorRouter.route("/")
.get(getAllActors)
.post(addActor)

actorRouter.route("/:id")
.get(getOneActor)
.put(updateActor)
.delete(deleteActor)


module.exports = actorRouter