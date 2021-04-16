import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const MovieDetails = (props)=>{

    const [movie, setMovie] = ({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/movies/' + props.movie_id)
        .then((res)=>{
            console.log(res);
            setMovie(res.data);

        })
        .catch((err)=>console.log(err));
    },[]);



    // "_id": "6078d5a10c62371ec082c16f",
    //     "title": "The Princess Bride",
    //     "releaseDate": "1987-10-09T04:00:00.000Z",
    //     "rating": "PG",
    //     "watchLength": 98,
    //     "genre": "Adventure",
    //     "actors": "Cary Elwes, Mandy Patinkin, Chris Sarandon, Christopher Guest",
    //     "coverArtUrl": "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg"

    return(
        <div>
            <h2>{movie.title}</h2>

            <div>
            <img src= {movie.coverArtUrl}/>
            </div>

            <p>releaseDate: {(new Date(movie.releaseDate)).toLocaleDateString("en-us") }</p>
            <p>rating: {movie.rating}</p>
            <p>duration: {movie.duration}</p>
            <p>genre: {movie.genre}</p>
            <p>actors: {movie.actors}</p>


        </div>
    )
}

export default MovieDetails;