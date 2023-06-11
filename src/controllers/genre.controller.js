const catchError = require("../utils/catchError")
const Genre = require("../models/Genre")


const addGenre = catchError(async(req,res) => {
    
    const genre = req.body
    const result = await  Genre.create(genre)
    res.status(203).json(result)
})


const getAllGenres = catchError(async(req,res) => {
   
    const result = await Genre.findAll()
    res.json(result)
})

const getOneGenre = catchError(async(req,res) => {
    
    const {id} = req.params
    const genre = await Genre.findByPk(id)
    if(!genre)  return res.json({mgs: "genre no encontrado"})
    res.json(genre)
    
})


const deleteGenre = catchError(async(req,res) => {
    
    const {id} = req.params
    const genre = await Genre.findByPk(id)
    if(!genre)  return res.json({mgs: "genre no encontrado"})
    const result = await Genre.destroy({where:{id}})
    res.status(200).json({mgs:"genre eliminado"}) 
})

const updateGenre = catchError(async(req, res) => {

    const {id} = req.params
    const edit = req.body
    const genre = await Genre.findByPk(id)
    if(!genre)  return res.json({mgs: "genre no encontrado"})
    const result = await Genre.update(edit,{where:{id}, returning:true})
    res.status(200).json(result[1][0])
})


module.exports = {
    getAllGenres,
    getOneGenre,
    deleteGenre,
    updateGenre,
    addGenre
}