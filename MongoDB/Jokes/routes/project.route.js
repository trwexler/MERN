const JokeController = require("../controllers/project.controller");


module.exports = (app) => {
  app.get("/api/jokes", JokeController.viewAllJokes);

  app.post("/api/jokes", JokeController.createJoke);

  app.get("/api/jokes/:_id", JokeController.returnJoke);

  app.put("/api/jokes/:_id", JokeController.updateJoke);

  app.delete("/api/jokes/:_id", JokeController.deleteJoke);

}

  
  
  
// /api/jokes           GET       get all jokes

// /api/jokes           POST     create a new joke

// /api/jokes/:_id   GET        return a single joke matching this _id

// /api/jokes/:_id   PUT        update a single joke matching this _id

// /api/jokes/:_id   DELETE  delete a single joke matching this _id
