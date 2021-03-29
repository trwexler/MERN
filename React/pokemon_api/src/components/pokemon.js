import React, {createElement, useEffect, useState} from 'react';

const Pokemon = (props)=>{

    const[pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        console.log(pokemon);
        const displayPoke = document.getElementById("displayPoke");
      

        for(let i=0; i<pokemon.length; i++){
             let newPoke = document.createElement("li");
             newPoke.innerHTML = pokemon[i].name;
             displayPoke.appendChild(newPoke);
        }

        // pokemon.map((poke,i)=> {
        //         return <div key={i}>{poke[i].name}</div>
        //     })
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <button id="button">Fetch Pokemon</button>
                <ul id="displayPoke"></ul>
            </form>



        </div>
    )

}


export default Pokemon