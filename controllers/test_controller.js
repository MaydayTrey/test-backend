const express = require('express')
const testRouter = express.Router();

//Okay I remember this faintly, we have to import the Router function which is a factory
//The router has multiple tools in it. 
//We set paths; but then within app we mount the router, giving a predefined path which this controller handles all requests for
//

let testData = [
    {
        name: "Trey",
        phoneNumber: "614-123-4567",
        id: "123"  
    },
]


/* Task - Build a working in-memory CRUD resource ; no DB, just an array in the router file.
Five routes:
	list all
	get one by id
	create
	update
	delete
--> Generate the ids myself
--> GET one by a nonexistent id has to 404 (failure handling)
--> POST with a missing required field has to 400
--> DELETE has to actually remove the array, and return the correct status.  */


testRouter.get('/', (request, response) => {
    response.send(testData)
})

testRouter.get('/:id',(request, response) => {
    const dataWanted = testData.find(item => item.id === request.params.id)
    if(!dataWanted) {
        //If it didn't find it, thus was undefined;
        response.status(404).json({error: `The id ${request.params.id} was not found within the data.`})
    } else {
        response.status(200).json(dataWanted)
    }
    //Not sure if this is correct, but feels alright. 
} )

testRouter.post('/', (request, response) => {
    //Damn, I remember we were using like api and .post, .send chained, but can't recall that. 
    const dataToAppend = request.body //This should be the thing desired to be appended to data, correct?
    const requiredKeys = ['name', 'phoneNumber'];
    const allKeysPresent = requiredKeys.every(key => dataToAppend.hasOwnProperty(key))
    if(allKeysPresent){
        dataToAppend.id = Date.now().toString()
        testData.push(dataToAppend)
        response.status(201).json(dataToAppend)
    } else {
        response.status(400).json({error: "Your data is missing the required properties"})
    }
})

testRouter.delete('/:id', (request, response) => {
    //Essentially we have to do the find request, can we not use that in here? I guess not. I'm tempted to paste the code.
    const dataWanted = testData.find(item => item.id === request.params.id)
    if(!dataWanted) {
        //If it didn't find it, thus was undefined;
        response.status(404).json({error: `The id ${request.params.id} was not found within the data.`})
    } else {
        testData = testData.filter(obj => obj.id !== request.params.id);  //We could use filter here, but that wouldn't persist because the data lives in memory, right?
        response.status(204).end()
    }
    //Not sure if this is correct, but feels alright. 
} )


module.exports = testRouter