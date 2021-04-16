const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  // check to make sure it is not a duplicate
  title: {
    type: String,
    required: [ true, "Title is required" ],
    minlength: [ 3, "Your title must be at least 3 characters long" ],
  },
  // no duplicates must not have the same title AND release date
  releaseDate: {
    type: Date,
    min: [ '1930-01-01', "Minimum date for a movie is 1940" ],
    max: [ new Date() , "You cannot enter a release date that happens in the future" ]
  },
  rating: {
    type: String,
    required: [ true, "Rating is required" ],
    maxlength: [ 7, "Ratings cannot be more than 7 characters long"]
  },
  // only allow certain strings
  genre: {
    type: String,
    required: [ true, "Genre is required" ],
    // give a list of all the valid values in this array
    // Adventure, Family, Fantasy, Romance, 
    enum: [ 
      'Action', 
      'Adventure',
      'Animation',
      'Cinema Verite',
      'Comedy', 
      'Drama', 
      'Experimental', 
      'Family',
      'Fantasy',
      'Foreign', 
      'Horror', 
      'Kung Fu', 
      'Musical',
      'Mystery',
      'Romance', 
      'Sci-Fi', 
    ],
  },
  watchLength: {
    type: Number, 
    required: [ true, "Movie length is required" ],
    min: [ 80, "To be a movie, you MUST be at least 80 minutes long"],
    max: [ 200, "You need to be able to stay awake for the movie, please don't make it too long"]
  },
  coverArtUrl: {
    type: String,
    required: [ true, "Cover Art is required because we love pictures!" ],
    minlength: [ 15, "Your cover art URL must be at least 15 characters long" ],
  },
  // String []
  // making this optional
  actors: {
    type: String,
  },
  // // amount of cash it has made at the box office
  // boxOffice: {
  //   type: Number,
  // },
  // imdbLink: {
  //   type: String,
  // },
}, { timestamps: true })

module.exports = mongoose.model("Movie", MovieSchema);