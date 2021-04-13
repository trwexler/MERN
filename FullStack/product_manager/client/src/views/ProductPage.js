import React, { useEffect, useState } from 'react';
import axios from 'axios';





const ProductPage = (props)=>{

    const[product, setProduct] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/" + props._id)
            .then(response =>{ setProduct(response.data);
            console.log(response.data);
        })
            .catch((err)=>{console.log(err)})
    }, [])

    return(

        <div className="pt-20">
            <h1 className="text-2xl capitalize">{product.name}</h1>
            <p>Price:{` $${product.price}`}</p>
            <p>Description: <span className="capitalize">{product.description}</span></p>
        </div>
    )

}

export default ProductPage;
