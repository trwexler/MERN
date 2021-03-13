import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard  firstName="Jim " lastName="Halpert, " age="88" hairColor=" Brown"/>
      <PersonCard firstName="Jim " lastName="Halpert, " age=" 88" hairColor=" Brown"/>
      <PersonCard firstName="Jim " lastName="Halpert, " age="88" hairColor=" Brown"/>
      <PersonCard firstName="Jim " lastName="Halpert, " age="88" hairColor="Brown"/>
    </div>
  );
}

export default App;
