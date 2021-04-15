import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';





const ProductPage = (props)=>{

    const[product, setProduct] = useState([]);
    const {_id} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/" + _id)
            .then(response =>{ setProduct(response.data);
            console.log(response.data);
        })
            .catch((err)=>{console.log(err)})
    }, [])

    const deleteCurrentProduct = ()=>{
        axios.delete('http://localhost:/api/product/' + _id)
        .then((res)=>props.deleteProduct(_id));
    }




    return(

        <div className="pt-20">
            <h1 className="text-2xl capitalize">{product.name}</h1>
            <p>Price:{` $${product.price}`}</p>
            <p>Description: <span className="capitalize">{product.description}</span></p>

            


            <button onClick={()=>navigate('/')}>
            Return Home
            </button>
        </div>
    )

}

export default ProductPage;
