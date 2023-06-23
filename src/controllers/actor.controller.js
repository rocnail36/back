const catchError = require("../utils/catchError")
const Actor = require("../models/Actor")


const addActor = catchError(async(req,res) => {
    
    const actor = req.body
    const result = await  Actor.create(actor)
    res.status(201).json(result)
})


const getAllActors = catchError(async(req,res) => {
   
    const result = await Actor.findAll()
   
    res.json(result)
})

const getOneActor = catchError(async(req,res) => {
    
    const {id} = req.params
    const actor = await Actor.findByPk(id)
    if(!actor)  return res.json({mgs: "actor no encontrado"})
    res.json(actor)
    
})


const deleteActor = catchError(async(req,res) => {
    
    const {id} = req.params
    const actor = await Actor.findByPk(id)
    if(!actor)  return res.json({mgs: "actor no encontrado"})
    const result = await Actor.destroy({where:{id}})
    res.status(204).json({mgs:"actor eliminado"}) 
})

const updateActor = catchError(async(req, res) => {

    const {id} = req.params
    const edit = req.body
    const actor = await Actor.findByPk(id)
    if(!actor)  return res.json({mgs: "actor no encontrado"})
    const result = await Actor.update(edit,{where:{id}, returning:true})
    res.status(200).json(result[1][0])
})

module.exports = {
    getAllActors,
    getOneActor,
    deleteActor,
    updateActor,
    addActor
}