const supertest = require("supertest")
const app = require("../index");


let idGenre;

test("POST -> '/api/v1/genres' should return status 201", async() => {

    const body = {
        name: "accion"
    }

   const res = await  supertest(app)
    .post("/api/v1/genres")
    .send(body)

    idGenre = res.body.id

    expect(res.status).toBe(201)
    expect(res.body.name).toBe(body.name)

})

test("GET -> 'api/v1/genres' should return status 200", async() => {

    const res = await supertest(app)
    .get("/api/v1/genres")

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
})

test("PUT -> '/api/v1/genres/:id', should return status 200", async() => {

    const body ={
        
        name: "comedia"
    }

    const res = await supertest(app)
    .put(`/api/v1/genres/${idGenre}`)
    .send(body)

    console.log(res.body)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe(body.name)

})


test("DELETE -> '/api/v1/genres/:id', should return status 204", async() => {

    const res = await supertest(app)
    .delete(`/api/v1/genres/${idGenre}`)

    expect(res.status).toBe(204)
})