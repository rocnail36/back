const supertest = require("supertest")
const app = require("../index")

let idDirector;

test("POST -> '/api/v1/directors', should return status 201", async() => {

    const body = {
        firstName: "jose",
        lastName: "daniel",
        nationality: "venezuela",
        image: "sdsd",
        birthday: "2000-04-13"
    }

    const res = await supertest(app)
    .post("/api/v1/directors")
    .send(body)

    idDirector = res.body.id

    expect(res.status).toBe(201)
    expect(res.body.firstName).toBe(body.firstName)
    
})

test("GET -> '/api/v1/directors', should return status 200", async() => {

    const res = await supertest(app)
    .get("/api/v1/directors")

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
})

test("PUT ->  '/api/v1/directors/:id'm should return status 200", async() => {

    const body = {
        firstName: "pepe"
    }

    const res = await supertest(app)
    .put(`/api/v1/directors/${idDirector}`)
    .send(body)

    expect(res.status).toBe(200)
    expect(res.body.firstName).toBe(body.firstName)
})

test("DELETE -> '/api/v1/directors/:id', should return 200", async() => {

    const res = await supertest(app)
    .delete(`/api/v1/directors/${idDirector}`)

    expect(res.status).toBe(204)

})