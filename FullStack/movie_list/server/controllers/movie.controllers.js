const Movie = require('../models/movie.model');

module.exports = {
  getAll: (req, res) => {
    Movie.find({})
      // .sort({ title: "ascending" })
      .sort({ title: 1 })
      .then((allMovies) => {
        console.log("in all movies");
        console.log(allMovies);
        res.json(allMovies);
      })
      .catch((err) => {
        console.log("error found in getAll");
        res.status(400).json(err);
      })
  },

  create: (req, res) => {
    console.log(req.body);
    Movie.create(req.body)
      .then((newMovie) => {
        console.log("in create");
        console.log(newMovie);
        res.json(newMovie);
      })
      .catch((err) => {
        console.log("error found in create");
        res.status(400).json(err);
      })
  },

  getOne: (req, res) => {
    console.log(req.params.id);

    Movie.findById(req.params.id)
      .then((oneMovie) => {
        console.log("in get one movie");
        console.log(oneMovie);
        res.json(oneMovie);
      })
      .catch((err) => {
        console.log("error found in getOne");
        res.status(400).json(err);
      })
  },

  update: (req, res) => {
    console.log(req.params.id);

    Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,  // give me the new version...not the original
      runValidators: true,  // by default mongoose will NOT validate on updates
    })
      .then((updatedMovie) => {
        console.log("in update movie");
        console.log(updatedMovie);
        res.json(updatedMovie);
      })
      .catch((err) => {
        console.log("error found in update");
        res.status(400).json(err);
      })
  },

  delete: (req, res) => {
    console.log(req.params.id);

    Movie.findByIdAndDelete(req.params.id)
      .then((deletedMovie) => {
        console.log("in delete movie");
        console.log(deletedMovie);
        res.json(deletedMovie);
      })
      .catch((err) => {
        console.log("error found in delete");
        res.status(400).json(err);
      })
  },
}