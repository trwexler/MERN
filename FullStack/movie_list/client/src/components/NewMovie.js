import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const NewMovie = (props) => {
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
        console.log(err);
      })

  }

  // this works for ALL keys inside of the state object!!
  const inputChange = (e) => {
    console.log("e.target.name:  " + e.target.name);
    console.log("e.target.value: " + e.target.value);

    let newStateObject = { ...newMovie };   // get a copy of the current state object
    newStateObject[e.target.name] = e.target.value;
    setNewMovie(newStateObject);
  }

  /*
  {
    "title": "The Princess Bride again",   // make sure the input matches the key name!!!
    "releaseDate": "1987-10-09",
    "rating": "PG",
    "genre": "Action",
    "watchLength": 98,
    "actors": "Cary Elwes and Robin Wright",
    "coverArtUrl": "https://www.imdb.com/title/tt0093779/mediaviewer/rm2230196992/"
}
  */
  return (
    <div>
      <h2>New Movie</h2>
        <form onSubmit={ submitHandler }>
          <div>
            <label>Title</label>
            {/* short version    onChange={inputChange} */}
            <input
              type="text"
              name="title"
              value={ newMovie.title }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Release Date</label>
            <input
              type="date"
              name="releaseDate"
              value={ newMovie.releaseDate }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>rating</label>
            <input
              type="text"
              name="rating"
              value={ newMovie.rating }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Genre</label>
            <select
              name="genre"
              value={ newMovie.genre }
              onChange={ (e) => inputChange(e) }
              >
              <option value=""></option>
              <option value='Action'>Action</option>
              <option value='Adventure'>Adventure</option>
              <option value='Animation'>Animation</option>
              <option value='Cinema Verite'>Cinema Verite</option>
              <option value='Comedy'>Comedy</option>
              <option value='Drama'>Drama</option>
              <option value='Experimental'>Experimental</option>
              <option value='Family'>Family</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Foreign'>Foreign</option>
              <option value='Horror'>Horror</option>
              <option value='Kung Fu'>Kung Fu</option>
              <option value='Musical'>Musical</option>
              <option value='Mystery'>Mystery</option>
              <option value='Romance'>Romance</option>
              <option value='Sci-Fi'>Sci-Fi</option>
            </select>
          </div>
          <div>
            <label>Duration (minutes)</label>
            <input
              type="number"
              min="80"
              max="200"
              name="watchLength"
              value={ newMovie.watchLength }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>actors</label>
            <input
              type="text"
              name="actors"
              value={ newMovie.actors }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>coverArtUrl</label>
            <input
              type="text"
              name="coverArtUrl"
              value={ newMovie.coverArtUrl }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <button>Add Movie</button>
        </form>
    </div>
  )
}

export default NewMovie;
