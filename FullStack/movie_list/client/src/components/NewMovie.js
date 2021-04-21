import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import MovieForm from './MovieForm';

const NewMovie = (props) => {
  const [ errors, setErrors ] = useState({});
  const [ newMovie, setNewMovie ] = useState({
    title: "",
    releaseDate: "",
    rating: "",
    genre: "",
    watchLength: 90,
    actors: "",
    coverArtUrl: ""
  })

  const submitHandler = (e) => {
    e.preventDefault();

    // do some stuff
    axios.post('http://localhost:8000/api/movies', newMovie)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      })
  }


  return (
    <div>
      <h2>New Movie</h2>
      <MovieForm
        movie={ newMovie } 
        setMovie={ setNewMovie }
        errors={ errors }
        submitHandler={ submitHandler }
        buttonLabel={ "Add Movie" }
        />
    </div>
  )
}

export default NewMovie;