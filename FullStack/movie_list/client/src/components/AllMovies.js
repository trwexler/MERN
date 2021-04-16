import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';


const AllMovies = (props)=>{
const [allMovies, setAllMovies]= useState([]);
    const getAllMovies = ()=>{
        
        axios.get('http://localhost:8000/api/movies')
        .then((res)=>{
            console.log(res.data);
            setAllMovies(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    }


    return(
        <div>
            <h2>All Movies</h2>
            <button onClick={ (e)=> getAllMovies(e)}>Get Movies</button>

            {
                allMovies.map((movie, index) =>(
                    <div key={index}>
                        <h4>{movie.title}</h4>
                    </div>
                ))
            
            }
        </div>
    )
}

export default AllMovies;