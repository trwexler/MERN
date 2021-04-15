import React from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const ProductList = (props) =>{

    const {product, setProduct} = props;


    // const removeProduct = (id)=>{
    //     axios.delete('http://localhost:8000/api/product/' + id)
    //         .then(response=>{
    //             deleteProduct(id);
    //         })
    //         .catch((err)=>console.log(err));
    // }

    // const deleteProduct = id => {
    //     setProduct(product.filter(item => item._id !== id));
    // }


    return (
        <div className="mt-8">
           
            <h1 className="text-2xl pt-5">All Products:</h1>
            {
                product.map((item, index)=>{
                    return (
                        <div key={index}>

                            <Link  to={`/product/edit/${item._id}`}>
                            <button>Edit</button></Link>

                            <Link  to={`/product/${item._id}`}>
                            <p className="capitalize underline inline-block mx-3">
                            {item.name}</p></Link>

                            {/* <DeleteButton id={item._id} deleteProduct={deleteProduct}/> */}
                        </div> 
                        )

                })
            }
        </div>
    )
}

export default ProductList;