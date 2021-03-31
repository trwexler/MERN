import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [personList, setPersonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(["https://swapi.dev/api/people"]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);



useEffect( ()=>{
  fetch(currentPage)
  .then((response)=>{
    return response.json();
  })
  .then((jsonResponse)=>{
    console.log(jsonResponse);
    setPersonList(jsonResponse.results);
    setPrev(jsonResponse.previous);
    setNext(jsonResponse.next);
  })
  .catch((error)=>{
    console.log(error);
  })
  },[currentPage]);

  //took away the named const/func "starWars" --- need to replace that utility
  
  
  return (
    <div className="App">

      {
        prev ?
        <button onClick={(e)=>setCurrentPage(prev)}>Previous</button>
        :<button onClick={(e)=>setCurrentPage("https://swapi.dev/api/people/?page=9")}>Previous</button>
      }

      {/* <button onClick={starWars}>click</button> */}

      {
        next ?
        <button onClick={(e)=>setCurrentPage(next)}>Next</button>
        :<button onClick={(e)=>setCurrentPage("https://swapi.dev/api/people")}>Next</button>
      }


      {
      personList.map((person, index)=>(
        <div key={index}>
         <p>Name: {person.name}, Height: {person.height}cm</p>

        </div>
      ))
      }
      
      
    </div>
  );
}

export default App;

