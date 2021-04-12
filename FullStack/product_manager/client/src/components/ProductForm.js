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

        <form onSubmit ={submitHandler} className="block">
            <h1 className="text-2xl">Product Manager</h1>
            <div className="bg-gray-50 rounded flex justify-between border-2 p-2 m-auto my-4 w-3/12" htmlFor="product">
                <label className="text-gray-500 w-20 text-left">Product</label>
                <input className="border rounded" type="text" onChange = {(e)=>setProduct(e.target.value)}/><br/>
            </div>

            <div className="bg-gray-50 rounded flex justify-between border-2 p-2 m-auto my-4 w-3/12" htmlFor="price">
                <label className="text-gray-500 w-20 text-left">Price</label>
                <input className="border rounded" type="text" onChange = {(e)=>setPrice(e.target.value)}/><br/>
            </div>


            <div className="bg-gray-50 rounded flex justify-between border-2 p-2 m-auto my-4 w-3/12" htmlFor="description">
                <label className="text-gray-500 w-20 text-left">Description</label>
                <input className="border rounded" type="text" onChange = {(e)=>setDescription(e.target.value)}/><br/>
            </div>
            
            <input className="p-3 border rounded" type="submit"/>


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

