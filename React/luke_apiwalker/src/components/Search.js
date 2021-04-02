import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Search = (props)=>{
    const {url, setUrl} = props;
    const {type, setType} = props;
    const {id, setId} = props;
    const {individual, setIndividual} = props;



    useEffect(() =>{
        axios.get(url)
            .then(res =>{ /*setPeople(res.data.results)*/
                setIndividual(res.data)
                // console.log(res.data)
                // console.log("url: "+ url)
            })
            .catch((err)=>{console.log(err)}
            )
        }, [url])
     
            const handleChange = (e)=>{
               let idContainer = e.target.value;
                setUrl(`https://swapi.dev/api/${type}/${idContainer}`); 
                setId(idContainer);
                // console.log("type:"+{type});
            }

            const handleClick = (e)=>{
                let typeContainer = e.target.value;
                 setUrl(`https://swapi.dev/api/${typeContainer}/${id}`); 
                 setType(typeContainer);
             }

    return(
        <>
        <form>
            <label htmlFor="Search">Search for:</label>
            <select id="Search" name="Search">
                <option onClick={handleClick} value="people">People</option>
                <option onClick={handleClick} value="planets">Planets</option>
                
            </select>

            <label htmlFor="ID">ID :</label>
            <input name="ID" onChange={handleChange} type="text"/>

            {
                <Link to={`/${type}/${id}`}><button  type="submit">Search</button></Link>
            }

            {individual.name}




        </form>
            
        </>
    )
}

export default Search;





















//COMPLETE FORM FUNCTIONALITY
//SELECTING PEOPLE/PLANETS AND ID GIVES YOU EXACTLY WHAT YOU WANT
//SEE APP.JS BOTTOM FOR SAME NOTE
//DISPLAY.JS AND COMPLETE ROUTING W PROPS NOT DONE AS OF THIS

// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import { Link } from '@reach/router';


// const Search = (props)=>{

//     const {people, setPeople} = props;
//     const {url, setUrl} = props;
//     const {type, setType} = props;
//     const {id, setId} = props;
//     const [individual, setIndividual] = useState("");



//     useEffect(() =>{
//         axios.get(url)
//             .then(res =>{ /*setPeople(res.data.results)*/
//                 setIndividual(res.data)
//                 console.log(res.data)
//                 console.log("url: "+ url)

//             })

//             .catch((err)=>{console.log(err)}
//             )
//         }, [url])
     
//             const handleChange = (e)=>{
//                let idContainer = e.target.value;
//                 setUrl(`https://swapi.dev/api/${type}/${idContainer}`); 
//                 setId(idContainer);
//             }

//             const handleClick = (e)=>{
//                 let typeContainer = e.target.value;
//                  setUrl(`https://swapi.dev/api/${typeContainer}/${id}`); 
//                  setType(typeContainer);
//              }



//     return(
//         <>
//         <form>
//             <label htmlFor="Search">Search for:</label>
//             <select id="Search" name="Search">
//                 <option onClick={handleClick} value="people">People</option>
//                 <option onClick={handleClick} value="planets">Planets</option>
                
//             </select>

//             <label htmlFor="ID">ID :</label>
//             <input name="ID" onChange={handleChange} type="text"/>

//             {
//                 <Link to={`/${type}/${type.name}/${id}`}><button  type="submit">Search</button></Link>
//             }

//             {individual.name}
//             {individual.mass}
//             {individual.climate}



//         </form>
            
//         </>
//     )
// }

// export default Search;















