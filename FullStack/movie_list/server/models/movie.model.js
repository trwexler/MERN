const mongoose = require('mongoose');
//validations in back-end not front
const MovieSchema = new mongoose.Schema({
   
    //check to make sure not a duplicate
    title: {
        type: String,
        required: [ true, "Title is required" ], //can just be true, but an error message will come with that string.
        minlength: [3, "Your title must be 3 characters"],
    },
   
    // no dups must not have same title AND release date (for remakes)
    //cannot be in future
    releaseDate: {
        type: Date,
        min: [ '1930-01-01', "Minimum date for movie is 1940"],
        max: [new Date(), "You cannot enter a release date that happens in the future"],

    },

    rating: {
        type: String,
        required: [ true, "Title is required" ], //can just be true, but an error message will come with that string.
        maxlength: [7, "Rating cannot be more than 7 chars"],
    },

    //only allow certain strings
    genre: {
        type: String,
        required: [ true, "Genre is required" ], //can just be true, but an error message will come with that string.
        //give a list of all the valid values in this array:
        enum: ["Comedy", "Horror", "Action", "Drama", "Romance", "Kung Fu", "Science Fiction", "Foreign", "Experimental"],
    }, 

    //min and max # of minutes
    watchLength: {
        type: Number,
        required:[true, "Movie length is required"],
        min: [80, "To be a movie, you MUST be at least 80 mins long"],
        max: [240, "You need to be able to stay awake for the movie. Not too long!"],
    },

    actors: {
        type: String,
        required: [ true, "Actors is required" ], //can just be true, but an error message will come with that string.
        minlength: [3, "Actors must be at least 3 chars"],
    },
    
    
    coverArtUrl:{
        type: String,
        required: [ true, "We love pictures" ], //can just be true, but an error message will come with that string.
        minlength: [15, "URL must be at least 15 chars"],
    },

},{ timestamps: true})

module.exports = mongoose.model("Movie", MovieSchema);