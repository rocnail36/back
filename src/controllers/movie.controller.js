const catchError = require("../utils/catchError")
const Movie = require("../models/Movie")
const Director = require("../models/Director")
const Actor = require("../models/Actor")
const Genre = require("../models/Genre")


const addMovie = catchError(async(req,res) => {
    
    const movie = req.body
    const result = await  Movie.create(movie)
    res.status(203).json(result)
})


const getAllMovies = catchError(async(req,res) => {
   
    const result = await Movie.findAll({include: [Director,Actor,Genre]})
    res.json(result)
})

const getOneMovie = catchError(async(req,res) => {
    
    const {id} = req.params
    const movie = await Movie.findByPk(id,{include: [Director,Actor,Genre]})
    if(!movie)  return res.json({mgs: "movie no encontrado"})
    res.json(movie)
    
})


const deleteMovie = catchError(async(req,res) => {
    
    const {id} = req.params
    const movie = await Movie.findByPk(id)
    if(!movie)  return res.json({mgs: "movie no encontrado"})
    const result = await Movie.destroy({where:{id}})
    res.json({mgs:"movie eliminado"}) 
})

const updateMovie = catchError(async(req, res) => {

    const {id} = req.params
    const edit = req.body
    const movie = await Movie.findByPk(id)
   
    const result = await Movie.update(edit,{where:{id}, returning:true})
    res.status(200).json(result[1][0])
})

const setActors = catchError(async(req,res) => {
    const {id} = req.params
    const actors = req.body
   
    const movie = await Movie.findByPk(id)
    if(!movie) return res.sendStatus(404)
    await movie.setActors(actors)
    const result = await movie.getActors()
    res.json(result)
})

const setGenres = catchError(async(req,res) => {
    const{ id} = req.params
    const genres = req.body
    
    const movie = await Movie.findByPk(id)
    if(!movie) return res.sendStatus(404)
    await movie.setGenres(genres)
    const result = await movie.getGenres()
    res.json(result)
})

const setDirectors = catchError(async(req,res) => {
    const {id} = req.params
    const directors = req.body

    const movie = await Movie.findByPk(id)
    if(!movie) return res.sendStatus(404)
    
    await movie.setDirectors(directors)
    const result = await movie.getDirectors()
    res.json(result)

})

module.exports = {

    getOneMovie,
    getAllMovies,
    deleteMovie,
    updateMovie,
    addMovie,
    setActors,
    setGenres,
    setDirectors

}