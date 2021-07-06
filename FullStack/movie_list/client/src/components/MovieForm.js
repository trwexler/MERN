import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const MovieForm = (props) => {
  const { movie, setMovie, errors, submitHandler, buttonLabel } = props;

  const ratings = [
    'G',
    'PG',
    'PG-13',
    'R',
    'NC-17',
    'Unrated'
  ];

  const genres = [ 
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
  ];

  // this works for ALL keys inside of the state object!!
  const inputChange = (e) => {
    console.log("e.target.name:  " + e.target.name);
    console.log("e.target.value: " + e.target.value);

    let newStateObject = { ...movie };   // get a copy of the current state object
    newStateObject[e.target.name] = e.target.value;
    setMovie(newStateObject);
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
      <h4>Movie Form</h4>
        <form onSubmit={ submitHandler }>
          <div>
            <label>Title</label>
            {
              errors.title ?
                <span className="error-text">{errors.title.message}</span>
                : null
            }
            {/* short version    onChange={inputChange} */}
            <input
              type="text"
              name="title"
              value={ movie.title }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Release Date</label>
            {
              errors.releaseDate ?
                <span className="error-text">{errors.releaseDate.message}</span>
                : null
            }
            <input
              type="text"
              name="releaseDate"
              value={ (new Date(movie.releaseDate)).toLocaleDateString("en-us") }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Rating</label>
            {
              errors.rating ?
                <span className="error-text">{errors.rating.message}</span>
                : null
            }
            <select
              name="rating"
              value={ movie.rating }
              onChange={ (e) => inputChange(e) }
              >
              <option value=""></option>
              {
                ratings.map((rating, index) => (
                  <option value={ rating} key={ 'rating-' + index }>{ rating }</option>
                ))
              }
            </select>
          </div>
          <div>
            <label>Genre</label>
            {
              errors.genre ?
                <span className="error-text">{errors.genre.message}</span>
                : null
            }
            <select
              name="genre"
              value={ movie.genre }
              onChange={ (e) => inputChange(e) }
              >
              <option value=""></option>
              {
                genres.map((genre, index) => (
                  <option value={ genre } key={ 'genre-' + index }>{ genre }</option>
                ))
              }
            </select>
          </div>
          <div>
            <label>Duration (minutes)</label>
            {
              errors.watchLength ?
                <span className="error-text">{errors.watchLength.message}</span>
                : null
            }
            <input
              type="number"
              min="80"
              max="200"
              name="watchLength"
              value={ movie.watchLength }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Actors</label>
            {
              errors.actors ?
                <span className="error-text">{errors.actors.message}</span>
                : null
            }
            <input
              type="text"
              name="actors"
              value={ movie.actors }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Cover Art Url</label>
            {
              errors.coverArtUrl ?
                <span className="error-text">{errors.coverArtUrl.message}</span>
                : null
            }
            <input
              type="text"
              name="coverArtUrl"
              value={ movie.coverArtUrl }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <button>{ buttonLabel }</button>
          <button onClick={ () => navigate("/") } className="cancelBtn">Cancel</button>
        </form>
    </div>
  )
}

export default MovieForm;