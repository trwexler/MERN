import { Router } from '@reach/router';
import Display from './components/Display';
import Search from './components/Search';

import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  //i need to import relavant router info
  //search component
  //display component
  //need people
  //need planets

  const [individual, setIndividual] = useState("");

  const [type, setType] = useState("people");
  const [id, setId] = useState(0);
  const [url, setUrl] = useState(`https://swapi.dev/api/${type}`);
  return (
    <div className="App">
      <Router>

        <Search 
        individual={individual} 
        setIndividual={setIndividual} 
        type={type} 
        setType={setType} 
        id={id} 
        setId={setId} 
        url={url} 
        setUrl={setUrl} 
        
        path="/"/> 
      
        <Display 
        individual={individual} 
        path={`/:${type}/:id`}
        
        />

        

      </Router>

    </div>
  );
}

export default App;











//COMPLETE FORM FUNCTIONALITY
//SELECTING PEOPLE/PLANETS AND ID GIVES YOU EXACTLY WHAT YOU WANT
//SEE SEARCH.JS BOTTOM FOR SAME NOTE
//DISPLAY.JS AND COMPLETE ROUTING W PROPS NOT DONE AS OF THIS

// import { Router } from '@reach/router';
// import Display from './components/Display';
// import Search from './components/Search';

// import React, {useState, useEffect} from 'react';
// import './App.css';

// function App() {
//   //i need to import relavant router info
//   //search component
//   //display component
//   //need people
//   //need planets

//   const [people, setPeople] = useState([]);

//   const [type, setType] = useState("people");
//   const [id, setId] = useState(0);
//   const [url, setUrl] = useState(`https://swapi.dev/api/${type}`);
//   return (
//     <div className="App">

//       <Router>

//         <Search people={people} setPeople={setPeople} type={type} setType={setType} 
//         id={id} setId={setId} url={url} setUrl={setUrl} path="/"/> 
        
//         <Display people={people} setPeople={setPeople} type={type} setType={setType}
//         id={id} setId={setId} url={url} setUrl={setUrl} path="/Planets:/location:/id"/>
        
//         <Display people={people} setPeople={setPeople} type={type} setType={setType}
//         id={id} setId={setId} url={url} setUrl={setUrl} path="/People:/person:/id"/>
        

//       </Router>

//     </div>
//   );
// }

// export default App;
