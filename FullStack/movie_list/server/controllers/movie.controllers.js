const Movie = require('../models/movie.model');

module.exports = {
    getAll: (req, res) =>{
        Movie.find({})
        .then((allMovies)=>{
            console.log("in all movies");
            console.log(allMovies);
            res.json(allMovies);
        })
        .catch((err)=>{
            console.log("Error found in getAll");
            res.json(err);
        })
    },

    create: (req, res) =>{
        console.log(req.body);
        Movie.create(req.body)
            .then((newMovie)=>{
                console.log("in create");
                console.log(newMovie);
                res.json(newMovie);
            })
            .catch((err)=>{
                console.log("Error found in create");
                res.json(err);
            })
    },


    getOne: (req, res) =>{
        console.log(req.params.id);

        Movie.findById(req.params.id)
        .then((oneMovie)=>{
            console.log("in all movies");
            console.log(oneMovie);
            res.json(oneMovie);
        })
        .catch((err)=>{
            console.log("Error found in getOne");
            res.json(err);
        })
    },

    update: (req, res) =>{
        console.log(req.params.id);

        Movie.findByIdAndUpdate(req.params._id, req.body, {
            new:true, //gives the new version... the default return is original
            runValidators:true,  //by default mongoose will not validate updates
        }) //needs the request and the req to replace with. replaces whole doc.
        .then((updatedMovie)=>{
            console.log("in update movie");
            console.log(updatedMovie);
            res.json(updatedMovie);
        })
        .catch((err)=>{
            console.log("Error found in update");
            res.json(err);
        })
    },


    delete: (req, res) =>{
        console.log(req.params.id);
        Movie.findByIdAndDelete(req.params.id)
        .then((deletedMovie)=>{
            console.log("in deleted movie");
            console.log(deletedMovie);
            res.json(deletedMovie);
        })
        .catch((err)=>{
            console.log("Error found in delete");
            res.json(err);
        })
    },












}