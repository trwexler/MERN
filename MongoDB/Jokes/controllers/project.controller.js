//Holds logic for each model

//Needs to import the model from the exported module in project.model.js 
const Joke = require("../models/project.model");

//Need to make sure each callback function is available to the route
//Set equal to obj, every key is going to be the name of the function, value is the callback func itself
module.exports={

    viewAllJokes: (request, response)=>{
        Joke.find({})
        .then( (allJokes) => {
          console.log(allJokes);
          response.json(allJokes);
        })
        .catch((err) => {
          console.log(err);
          response.json(err);
        })
    },


    createJoke: (request, response) =>{
        Joke.create(request.body)
        .then( (newJoke) => {
          console.log(newJoke);
          response.json(newJoke);
        })
        .catch((err) => {
          console.log(err);
          response.json(err);
        })
    },




    returnJoke: (request, response) =>{
        Joke.findOne({ _id:request.params})
            .then(oneJoke => response.json(oneJoke.setup + " " + oneJoke.punchline))
            .catch(err => response.json({ message: 'Something went wrong', error: err }));
    },






    updateJoke: (request, response) =>{
        Joke.updateOne({ _id:request.params},{setup: request.body.setup , punchline: request.body.punchline})
            .then(changeJoke => response.json(changeJoke))
            .catch(err => response.json({ message: 'Something went wrong', error: err }));
    },




    deleteJoke: (request, response) =>{
        Joke.remove({ _id:request.params})
            .then(deleteJoke => response.json(deleteJoke))
            .catch(err => response.json({ message: 'Something went wrong', error: err }));
    },



        

    }



