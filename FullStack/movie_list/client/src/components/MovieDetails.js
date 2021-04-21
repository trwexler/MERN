import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const MovieDetails = (props) => {
  const [ movie, setMovie ] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/api/movies/' + props.movie_id)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteMe = () => {
    axios.delete('http://localhost:8000/api/movies/' + props.movie_id)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /*
  {
    "_id": "6078c33b0b33c331143f8c03",
    "title": "The Princess Bride",
    "releaseDate": "1987-10-09T06:00:00.000Z",
    "rating": "PG",
    "watchLength": 98,
    "genre": "Adventure",
    "actors": "Cary Elwes, Mandy Patinkin, Chris Sarandon, Christopher Guest",
    "coverArtUrl": "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg"
  }
  */
  return (
    <div>
      <h2>
        { movie.title }
      </h2>
      <div>
        <img src={ movie.coverArtUrl } alt={ movie.title } />
      </div>
      <p>
        Release Date: { (new Date(movie.releaseDate)).toLocaleDateString("en-us") }
      </p>
      <p>
        Rating: { movie.rating }
      </p>
      <p>
        Duration (minutes): { movie.watchLength }
      </p>
      <p>
        Genre: { movie.genre }
      </p>
      <p>
        Actors: { movie.actors }
      </p>
      <button onClick={ () => navigate(`/movies/${movie._id}/edit`) }>Edit Movie</button>
      <Link to="/">Return to All Movies</Link>
      <button onClick={ deleteMe } className="deleteBtn">Delete Movie</button>
    </div>
  )
}

export default MovieDetails;