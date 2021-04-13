import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    

    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then((res)=> {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch((err)=> err)
    }, [product])

    const deleteProduct = id => {
        setProduct(product.filter(item => item._id != id));
    }





    return (
        <div>
           <ProductForm/>
           { loaded && <ProductList product={product} deleteProduct={deleteProduct}/>}
        </div>
    )
}
export default Main;





