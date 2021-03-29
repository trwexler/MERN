import React, {useEffect, useState} from 'react';

const Pokemon = (props)=>{

    const[pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);   
    //state.isSubmitted ???
    // useEffect(()=>{
    //     alert("When will this run?");
    // }, [state.isSubmitted]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(pokemon);
        pokemon.map((poke, i)=> {
            const displayPoke = document.getElementById("displayPoke");
            let newPoke = document.createElement("li");
            newPoke.innerHTML = poke.name;
            displayPoke.appendChild(newPoke);
            })
        }

    //     // pokemon.map((poke,i)=> {
    //     //         return <div key={i}>{poke[i].name}</div>
    //     //     })
    // }





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