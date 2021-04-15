import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const Update = (props)=>{


    const {setProduct,id, name,
        setName, product,
        description, setDescription, price,
        setPrice, deleteProduct} = props;
    
    //Not needed because id is stored as a prop
    //from the app.js < Update path="product/edit/:id />
    // const [dbId, setDbID] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
        .then((res)=>{
            console.log(res.data);
            setName(res.data.name);
            setPrice(res.data.price);
            setDescription(res.data.description);
            // setDbID(res.data._id);
        })
    }, [])



    const removeProduct = ()=>{
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(response=>{
                deleteProduct(id);

            })
            .catch((err)=>console.log(err));
            
            navigate('http://localhost:3000/');

    }



    const submitHandler = (e)=>{
        e.preventDefault();
        
        axios.put('http://localhost:8000/api/product/' + id, { 
        name, description, price}
        )
        .then((res)=>{ 
            console.log(res.data);
        });

        navigate('http://localhost:3000/');

    }



    return(
        <form onSubmit={submitHandler} className="block">
        <h1 className="text-3xl">Edit Product Manager</h1>
        <button onClick={(e)=>removeProduct(id)}>x</button>

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

