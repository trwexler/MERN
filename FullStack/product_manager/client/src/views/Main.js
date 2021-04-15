import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {

    const {product, setProduct,loaded, setLoaded, name,
        setName, description, setDescription, price,
        setPrice, deleteProduct} = props;
    


    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);

            });
    },[])

    // const deleteProduct = id => {
    //     setProduct(product.filter(item => item._id !== id));
    // }

    return (
        <div>
           <ProductForm
                product={product}
                setProduct={setProduct}
                price={price}
                setPrice={setPrice}
                description={description}
                setDescription={setDescription}
                name={name}
                setName={setName}
                deleteProduct={deleteProduct}
           />
           <hr/>
           { loaded && <ProductList 
                product={product}
                setProduct={setProduct}
                price={price}
                setPrice={setPrice}
                description={description}
                setDescription={setDescription}
                name={name}
                setName={setName}
                deleteProduct={deleteProduct}
                /> }
        </div>
    )}
export default Main;





