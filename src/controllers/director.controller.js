const catchError = require("../utils/catchError")
const Director = require("../models/Director")


const addDirector = catchError(async(req,res) => {
    
    const director = req.body
    const result = await  Director.create(director)
    res.status(201).json(result)
})


const getAllDirectors = catchError(async(req,res) => {
   
    const result = await Director.findAll()
    res.json(result)
})

const getOneDirector = catchError(async(req,res) => {
    
    const {id} = req.params
    const director = await Director.findByPk(id)
    if(!director)  return res.json({mgs: "director no encontrado"})
    res.json(director)
    
})


const deleteDirector = catchError(async(req,res) => {
    
    const {id} = req.params
    const director = await Director.findByPk(id)
    if(!director)  return res.json({mgs: "director no encontrado"})
    const result = await Director.destroy({where:{id}})
    res.status(204).json({mgs:"director eliminado"}) 
})

const updateDirector = catchError(async(req, res) => {

    const {id} = req.params
    const edit = req.body
    const director = await Director.findByPk(id)
    if(!director)  return res.json({mgs: "director no encontrado"})
    const result = await Director.update(edit,{where:{id}, returning:true})
    res.status(200).json(result[1][0])
})


module.exports ={
    getAllDirectors,
    getOneDirector,
    deleteDirector,
    updateDirector,
    addDirector
}