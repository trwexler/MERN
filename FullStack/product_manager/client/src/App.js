import React, {useState, useEffect} from 'react';
import Main from './views/Main';
import axios from 'axios';
import ProductPage from './views/ProductPage';
import './App.css';
import {Router} from "@reach/router";
import Update from './views/Update'


function App() {
  //Goes everywhere
  const [product, setProduct] = useState([]);

  //Goes to Main.js only
  const [loaded, setLoaded] = useState(false);

  //main->productform, and update.js all three
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  useEffect(()=>{
    axios.get('http://localhost:8000/api/product')
        .then(res=>{
          console.log(res);
            setProduct(res.data);
            setLoaded(true);
        });
  },[])

//goes to main->product list, and update

//   const deleteProduct = id => {
//     setProduct(product.filter(item => item._id !== id));
// }

  return (
    <div className="App">
      <Router>
        <Main path="/" 
        product={product}
         setProduct={setProduct}
         price={price}
         setPrice={setPrice}
         description={description}
         setDescription={setDescription}
         name={name}
         setName={setName}
        //  deleteProduct={deleteProduct}
         loaded={loaded}
         />

        <ProductPage path="/product/:_id" />
        {loaded && <Update path="/product/edit/:id" 
        // deleteProduct={deleteProduct}
        product={product}
         setProduct={setProduct}
         price={price}
         setPrice={setPrice}
         description={description}
         setDescription={setDescription}
         name={name}
         setName={setName}
        />}
      </Router>
    </div>
  );
}

export default App;
