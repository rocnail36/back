const supertest = require("supertest")
const app = require("../index");
const Actor = require("../models/Actor");
const Director = require("../models/Director");
const Genre = require("../models/Genre");
require("../models")

let idMovie;

test("POST -> '/api/v1/movies', should return status 201", async() => {

    const body = {
        name: "lola",
        image: "45165",
        synopsis: "accion",
        releaseYear: "2000-04-13"
    }

    const res = await supertest(app)
    .post("/api/v1/movies")
    .send(body)

    idMovie = res.body.id

    expect(res.status).toBe(201)
    expect(res.body.name).toBe(body.name)

})


test("GET -> '/api/v1/movies', should return status 200", async() => {

    const res = await supertest(app)
    .get("/api/v1/movies")

    console.log(res.body)

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)

})

test("PUT -> '/api/v1/movies/:id', should return status 200", async() => {

    const body = {
        name: "kakka"
    }

    const res = await supertest(app)
    .put(`/api/v1/movies/${idMovie}`)
    .send(body)

    expect(res.status).toBe(200)
    expect(res.body.name).toBe(body.name)

})

test("POST -> '/api/v1/movies/:id/directors', should return status 200", async() => {

    const body = {
        firstName: "jose",
        lastName: "daniel",
        nationality: "venezuela",
        image: "sdsd",
        birthday: "2000-04-13"
    }

    const director = await Director.create(body)
    const idDirector = director.id

    const res = await supertest(app)
    .post(`/api/v1/movies/${idMovie}/directors`)
    .send([idDirector])

    console.log(res.body)

    expect(res.status).toBe(200)
    expect(res.body[0].movieDirectors).toBeDefined()
    director.destroy()
})

test("POST -> '/api/v1/movies/:id/actors', should return status 200", async() => {

    const body = {
        firstName: "jose",
        lastName: "daniel",
        nationality: "venezuela",
        image: "sdsd",
        birthday: "2000-04-13"
    }

    const actor = await Actor.create(body)
    const idActor = actor.id

    const res = await supertest(app)
    .post(`/api/v1/movies/${idMovie}/actors`)
    .send([idActor])

    console.log(res.body)

    expect(res.status).toBe(200)
    expect(res.body[0].movieActors).toBeDefined()
    actor.destroy()

})

test("POST -> '/api/v1/movies/:id/genres', should return status  200", async() => {

    body = {
        name: "accion"
    }

    const genre = await Genre.create(body)
    const idGenre = genre.id

    const res = await supertest(app)
    .post(`/api/v1/movies/${idMovie}/genres`)
    .send([idGenre])

    expect(res.status).toBe(200)
    expect(res.body[0].movieGenres).toBeDefined()

    genre.destroy()

})


test("DELETE -> '/api/v1/movies/:id', should return status 204", async() => {

    const res = await supertest(app)
    .delete(`/api/v1/movies/${idMovie}`)

    expect(res.status).toBe(200)
})


