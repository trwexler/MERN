import React from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';

const DeleteButton = (props) => {

    const {id, product, setProduct} = props;
   
    const deleteProduct = id => {
        setProduct(product.filter(item => item._id !== id));
    }
//! Make Delete button's prop (nav or delete prod) 
//! unique from parent per kevin's advice
    const removeProduct = ()=>{
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(response=>{
                deleteProduct(id);
                console.log(response.data); 
            })
            .catch((err)=>console.log(err));
            navigate('/');
    }
    return (
        <button onClick={(e)=>removeProduct(id)}>
            Delete
        </button>
    )
}
export default DeleteButton;





//includes the prop success being passed down which
//holds different value depending on the parent

// import React, { useCallback } from 'react'
// import axios from 'axios';
// import {navigate} from '@reach/router';

// const DeleteButton = (props) => {

//     const {id, success} = props;


//     const removeProduct = ()=>{
//         axios.delete('http://localhost:8000/api/product/' + id)
//             .then(response=>{

//                 //this will run with whatever the success prop is given in its parent
//                 //component. For example, ProductList has this generated as apart of map,
//                 //so the array is added to when triggered. The way to trigger (or change the state)
//                 //without adding to it is the id !== id filtering method, named "deleteProduct"
//                 //in ProductList.

//                 //Update.js's success prop is passed the navigate method from
//                 //reach/router , which returns
//                 //to the main.js view and triggers a reload.
//                 success();
//                 console.log(response.data);
//             })
//             .catch((err)=>console.log(err));
//             navigate('http://localhost:3000/');
//     }


   
//     return (
//         <button onClick={(e)=>removeProduct(id)}>
//             Delete
//         </button>
//     )
// }
// export default DeleteButton;