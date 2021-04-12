import React, {useState} from 'react';
import axios from 'axios';


const ProductForm = (props)=>{


    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            product, price, description
        })
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))   
    }


    return(

        <form onSubmit ={submitHandler}>
            <label htmlFor="product">Product</label>
            <input type="text" onChange = {(e)=>setProduct(e.target.value)}/><br/>

            <label htmlFor="price">Price</label>
            <input type="text" onChange = {(e)=>setPrice(e.target.value)}/><br/>

            <label htmlFor="description">Description</label>
            <input type="text" onChange = {(e)=>setDescription(e.target.value)}/><br/>

            <input type="submit"/>


        </form>


    )
}

export default ProductForm;







































// import React, { useState } from 'react'
// import axios from 'axios';
// const ProductForm = () => {

//     const [product, setProduct] = useState(""); 
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");


//     const onSubmitHandler = e => {

//         e.preventDefault();
    
//         axios.post('http://localhost:8000/api/product', {
//             product,    
//             price,
//             description      
//         })
//             .then(res=>console.log(res.data))
//             .catch(err=>console.log(err))
//     }
//     //onChange to update firstName and lastName
//     return (
//         <form onSubmit={onSubmitHandler}>
//             <p>
//                 <label>Product Name</label><br/>
//                 <input type="text" onChange = {(e)=>setProduct(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Price</label><br/>
//                 <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Description</label><br/>
//                 <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
//             </p>
//             <input type="submit"/>
//         </form>
//     )
// }
// export default ProductForm;

