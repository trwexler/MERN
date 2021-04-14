import React, {useState} from 'react';
import axios from 'axios';
// import {Link} from '@reach/router';


const Update = (props)=>{


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    // const {product, setProduct} = props;

    

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + props._id, { 
        name, description, price}
        )
        .then((res)=>{ 
            console.log(res.data);
        })
    }

    return(
        <form onSubmit={submitHandler} className="block">
        <h1 className="text-3xl">Edit Product Manager</h1>

        <div className="
        bg-gray-50 
        rounded 
        flex 
        justify-between 
        border-2 
        px-3
        py-4 
        m-auto 
        my-4 
        w-80">
            <label className="
            text-gray-500 
            w-20 
            text-left">
            Edit Name:
            </label>
            <input className="
            border 
            rounded 
            w-3/5" 
            type="text" 
            value={name}
            onChange = {(e)=>setName(e.target.value)}/>
            <br/>
        </div>

        <div className="
        bg-gray-50 
        rounded 
        flex 
        justify-between 
        border-2 
        px-3
        py-4 
        m-auto 
        my-4 
        w-80">
            <label className="
            text-gray-500 
            w-20 
            text-left">
            Edit Price:
            </label>
            <input className="
            border 
            rounded 
            w-3/5" 
            type="text" 
            value={price}
            onChange = {(e)=>setPrice(e.target.value)}/>
            <br/>
        </div>


        <div className="
        bg-gray-50 
        rounded 
        flex 
        justify-between 
        border-2 
        px-3
        py-4 
        m-auto 
        my-4 
        w-80">
            <label className="
            text-gray-500 
            w-20 
            text-left">
            Edit Description:
            </label>
            <input className="
            border 
            rounded 
            w-3/5" 
            type="text" 
            value={description}
            onChange = {(e)=>setDescription(e.target.value)}/>
            <br/>
        </div>
        
        <input className="p-3 border rounded text-gray-600" type="submit"/>
      
        
        
    </form>
    )
}


export default Update;

