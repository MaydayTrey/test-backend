const express = require('express')
const middleware = require('./utils/middleware')
const app = express()
const testRouter = require('./controllers/test_controller')

app.use(middleware.timedRequest)
app.use(express.json()) 
app.use(middleware.logger)
app.use('/api/test', testRouter)

module.exports = app

