import './App.css';
import MessageForm from './components/Reducer';
import MessageDisplay from './components/MessageDisplay';
import { useState } from 'react';

function App() {

  const [currentMsg, setCurrentMsg]=useState("There are no messages!");

  const youveGotMail = (msg) => {
    setCurrentMsg(msg);
  }

  return (
    <div className="App">

      <MessageForm onNewMessage={youveGotMail}/>


      <MessageDisplay message={currentMsg}/>
     
    </div>
  );
}

export default App;
