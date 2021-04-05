import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard  firstName="Jim " lastName="Halpert, " age={32} hair=" Brown"/>
      <PersonCard firstName="Michael " lastName="Scott, " age={38} hair=" Brown"/>
      <PersonCard firstName="Dwight " lastName="Schrute, " age={35} hair=" Brown"/>
      <PersonCard firstName="Kelly " lastName="Kipour, " age={27} hair=" Black"/>
     </div>
  );
}

export default App;
