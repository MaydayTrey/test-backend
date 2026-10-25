const logger = (request, response, next) => {
    if(process.env.NODE_ENV !== 'test'){
        console.log(request.method, '\n', request.path, '\n', request.body)
    }
    next()
}


const timedRequest = (request, response, next) => {
    const requestStartTime = Date.now() //Log the start of the request
    response.on('finish', () => { //On the finish of the response, console log, and get how long it took
        const requestEndTime = Date.now()
        console.log(`Request finished, it took ${requestEndTime - requestStartTime}`)
    })
    next() //This next keeps going, but the actual timedRequest middleware is live since a closure is listening for response.on
}

module.exports = { 
    logger,
    timedRequest
 }