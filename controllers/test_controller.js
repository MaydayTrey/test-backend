const express = require('express')
const testRouter = express.Router();

//Okay I remember this faintly, we have to import the Router function which is a factory
//The router has multiple tools in it. 
//We set paths; but then within app we mount the router, giving a predefined path which this controller handles all requests for
//

testRouter.get('/', (request, response) => {
    response.send('Received a GET HTTP request')
})

testRouter.post('/', (request, response) => {
    console.log(request.body)
    response.send('Posted!')
})


module.exports = testRouter