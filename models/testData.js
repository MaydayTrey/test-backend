const mongoose = require('mongoose')


const { Schema } = mongoose; //Are we destructuring the Schema object out of Mongoose here?
//What are some of the constraints/behaviors of a schema in Mongoose?


const testSchema = new Schema({
  name: { 
    type: String, 
    required: true //Required to have a name 
    },
  phoneNumber: { 
    type: String, //Should this be a number or string? I did string. Really we would want strip logic here, but I won't do that now.
    required: true, //Required
    unique: true,  //Must be a unique phone number
    }, //Really we would want a regex of how the number should be - inste
  id: { 
    type: String, 
    unique: true 
    },
});


testSchema.set('toJSON', {
    versionKey: false,
  transform: (document, returnedObject) => {
    delete returnedObject._id
  }
})

const testmodels = mongoose.model('testmodels', testSchema)

module.exports = testmodels

//So I saw most of the tooling of a .set on a schema, and how that works, allows alterations to the retrieved DB object.
// What is the point of making a mongoose.model and not just exporting testSchema? I guess it makes sense. 