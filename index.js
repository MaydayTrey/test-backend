const mongoose = require('mongoose')
const config = require('./utils/config')
const app = require('./app')


const databaseConnection = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI, { family: 4 })
        console.log('Connected to MongoDB.')
        app.listen(config.PORT, () => {
            console.log(`The server is running on port ${config.PORT}`)
        })
    } catch (error) {
        console.log('Connection failed.', error.message)
        process.exit(1)
    }
}

databaseConnection();
//With this design - the app is only listening, the server is only running on a successful MongoDB connection, otherwise you just get an error.
