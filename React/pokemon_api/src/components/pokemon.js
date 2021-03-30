import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props)=>{

    const[pokemon, setPokemon] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => setPokemon(response.data.results))
        }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <button id="button">Fetch Pokemon</button>
    
            </form> 
            <ul id="displayPoke">

{
            pokemon.map((poke, i)=>(
                <li key={i}>{poke.name}</li>
            ))
}

            </ul>
        </div>
    )
}

export default Pokemon




// import React, {useEffect, useState} from 'react';

// const Pokemon = (props)=>{

//     const[pokemon, setPokemon] = useState([]);

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         console.log(pokemon);
//         fetch('https://pokeapi.co/api/v2/pokemon')
//             .then(response => response.json())
//             .then(response => setPokemon(response.results))
//         }
            
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <button id="button">Fetch Pokemon</button>
    
//             </form> 
//             <ul id="displayPoke">
// {
//             pokemon.map((poke, i)=>(
//                 <li>{poke.name}</li>
//             ))
// }
//             </ul>
//         </div>
//     )

// }


// export default Pokemon