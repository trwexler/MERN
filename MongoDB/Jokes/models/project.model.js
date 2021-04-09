const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(

    {
      setup: String,
      punchline: String,
    },
    // options on how data is stored
    {
      timestamps: true,
    }
  )
  
  // Step 2: instantiate the model for the routes to use the DB
  const modelName = "Joke";
  
  // modelname is used for the collection name inside of the database
  //    The modelname is changed to be lowercase and plural for the collection name
  const Joke = mongoose.model(modelName, JokeSchema);

  module.exports = Joke; 