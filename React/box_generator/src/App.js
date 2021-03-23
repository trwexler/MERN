import React, {useState} from 'react';
import './App.css';
import Generator from './components/Generator';
import Display from './components/Display';

function App() {
  
  const [square, setSquare] = useState([]);



  return (
    <div className="App">

      <Generator square= { square } setSquare={ setSquare } />
      
      <Display square = { square } /> 

    </div>
  );
}

export default App;





// import './App.css';
// import Generator from './components/Generator';

// function App() {
//   return (
//     <div className="App">
// <Generator />
//     </div>
//   );
// }

// export default App;
