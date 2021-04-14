import React, {useState, useEffect} from 'react';
import Main from './views/Main';
import axios from 'axios';
import ProductPage from './views/ProductPage';
import './App.css';
import {Router} from "@reach/router";
import Update from './views/Update'


function App() {

  const [product, setProduct] = useState([]);

  const [loaded, setLoaded] = useState(false);


  useEffect(()=>{
    axios.get('http://localhost:8000/api/product')
        .then(res=>{
            setProduct(res.data);
            setLoaded(true);
        });
},[])

  const deleteProduct = id => {
    setProduct(product.filter(item => item._id !== id));
}



  return (


    
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductPage path="/product/:_id" />
        {loaded && <Update path="/product/edit/:id" deleteProduct={deleteProduct}/>}
      </Router>
    </div>
  );
}

export default App;
