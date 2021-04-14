import React from 'react';
import Main from './views/Main';
import ProductPage from './views/ProductPage';
import './App.css';
import {Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/api/product"/>
        <ProductPage path="/api/product/:_id"/>
      </Router>
    </div>
  );
}

export default App;
