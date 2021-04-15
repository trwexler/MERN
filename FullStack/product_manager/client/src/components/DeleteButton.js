import React from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';

const DeleteButton = (props) => {

    const {id, deleteProduct} = props;

    const removeProduct = ()=>{
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(response=>{
                deleteProduct(id);
                console.log(response);
            })
            .catch((err)=>console.log(err));
            navigate('http://localhost:3000/');
    }

   
    return (
        <button onClick={(e)=>removeProduct(id)}>
            Delete
        </button>
    )
}
export default DeleteButton;