import React, { useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/ProductList';

const Main = (props) => {

    const {product, setProduct,loaded, name,
        setName, description, setDescription, price,
        setPrice} = props;
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setName("");
                setDescription("");
                setPrice("");
            });
    },[])

    const submitHandler = (e)=>{
        e.preventDefault();
            axios.post('http://localhost:8000/api/product', {
                name, price, description
            })
            .then((res)=>{
                // * IMPORTANT: CONTINUOUS UPDATE SYNTAX \/ \/ \/
                const productConstant = [...product, res.data];
                setProduct(productConstant);
                console.log(product);
                setName("");
                setDescription("");
                setPrice("");
            })
            .catch((err)=>console.log(err));

        
    }

    return (
        <div>
        <h1 className="text-4xl py-2">Products</h1>
            <Form submitHandler={submitHandler} product={product}
         setProduct={setProduct}
         price={price}
         setPrice={setPrice}
         description={description}
         setDescription={setDescription}
         name={name}
         setName={setName}
         submitText="Add"    
         />
           <hr className="mt-6"/>

        { loaded && <ProductList 
            product={product}
            setProduct={setProduct}
            price={price}
            setPrice={setPrice}
            description={description}
            setDescription={setDescription}
            name={name}
            setName={setName}
            /> }
        </div>
    )}

export default Main;





