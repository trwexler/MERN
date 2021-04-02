import React from 'react';



const Display = (props)=>{

    const {individual, setIndividual} = props;

    if(props.planets){
        console.log("planets");
        return(
            <div>
                <h1>{individual.name}</h1>
                <div>Climate: {individual.climate}</div>
                <div>Terrain: {individual.terrain}</div>
                <div>Surface Water: {individual.surface_water}</div>
                <div>Population: {individual.population}</div>
            </div>  
        )
    }

    else{
        console.log("people");
        return(
            <div>
                <h1>{individual.name}</h1>
                <div>Height: {individual.height}</div>
                <div>Hair Color: {individual.hair_color}</div>
                <div>Eye Color: {individual.eye_color}</div>
                <div>Skin Color: {individual.skin_color}</div>
            </div>
        )
    }






}




export default Display;