const app = require('./app')
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})

//I don't think it really needs anything at all, except just initiating the listening port?