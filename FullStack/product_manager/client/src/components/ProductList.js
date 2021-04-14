import React from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const ProductList = (props) =>{

    const {product, deleteProduct} = props;


    const removeProduct = (id)=>{
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(response=>{
                deleteProduct(id);
            })
            .catch((err)=>console.log(err));
    }


    return(
        <div className="mt-8">
           
            <h1 className="text-2xl pt-5">All Products:</h1>
            {
                product.map((item, index)=>{
                    return (
                        <div key={index}>
                        <button>Edit</button>
                        <Link  to={`/api/product/${item._id}`}><p className="capitalize underline inline-block mx-3">{item.name}</p></Link>
                        <button onClick={(e)=>{removeProduct(item._id)}}>x</button>
                        </div> 
                        )

                })
            }
        </div>
    )
}

export default ProductList;