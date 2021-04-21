import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import MovieForm from './MovieForm';

const EditMovie = (props) => {
    
  const [ errors, setErrors ] = useState({});

  const [ movie, setMovie ] = useState({
    title: "",
    releaseDate: "",
    rating: "",
    genre: "",
    watchLength: 90,
    actors: "",
    coverArtUrl: ""
  })

  useEffect(() => {
    axios.get('http://localhost:8000/api/movies/' + props.id)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/");
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    // do some stuff
    axios.put('http://localhost:8000/api/movies/' + props.id, movie)
      .then((res) => {
        console.log(res.data);
        navigate('/movies/' + props.id);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      })
  }


  return (
    <div>
      <h2>Edit Movie</h2>
      <MovieForm
        movie={ movie } 
        setMovie={ setMovie }
        errors={ errors }
        submitHandler={ submitHandler }
        buttonLabel={ "Update Movie" }
        />
    </div>
  )
}

export default EditMovie;