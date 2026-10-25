const express = require('express')
const middleware = require('./utils/middleware')
const app = express()
app.use(middleware.timedRequest)
app.use(express.json()) 
app.use(middleware.logger)

app.get('/', (request, response) => {
    response.send('Received a GET HTTP request')
})

app.post('/', (request, response) => {
    console.log(request.body)
    response.send('Posted!')
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})

