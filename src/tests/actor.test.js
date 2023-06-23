const supertest = require("supertest")
const app = require("../index")

let idActor;


test("POST ->  '/api/v1/actors' should return status 201", async() => {
  const body = {
        firstName: "jose",
        lastName: "daniel",
        nationality: "venezuela",
        image: "sdsd",
        birthday: "2000-04-13"
    }

    const res = await supertest(app)
    .post("/api/v1/actors")
    .send(body)

    idActor = res.body.id

    expect(res.status).toBe(201)
    expect(res.body.firstName).toBe(body.firstName)

})

test("GET -> '/api/v1/actors' should return status 200 and length == 1", async() => {

    const res = await supertest(app)
    .get("/api/v1/actors")
    
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
    
})  

test("PUT -> '/api/v1/actors/:id' should return status 200", async() => {

   const  body = {
        firstName: "pepe"
    }

    const res = await supertest(app)
    .put(`/api/v1/actors/${idActor}`)
    .send(body)

    expect(res.status).toBe(200)

})

test("DELETE -> '/api/v1/actors/:id' should return status 204",async () => {
    const res = await supertest(app)
    .delete(`/api/v1/actors/${idActor}`)

    expect(res.status).toBe(204)
})