const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

app.get('/', (request, response) => {
    response.send('Hello!')
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})
