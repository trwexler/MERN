import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import Form from '../components/Form';

const Update = (props)=>{

    const {id, name, setName, description, 
        setDescription, price, setPrice, product, setProduct} = props;


        useEffect(()=>{
            axios.get('http://localhost:8000/api/product/' + id)
            .then((res)=>{
                console.log(res.data);
                setName(res.data.name);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
        }, [])

        const submitHandler = (e)=>{
            e.preventDefault();
            axios.put('http://localhost:8000/api/product/' + id, { 
            name, description, price
            })
            .then((res)=>{ 
                console.log(res.data);
                const productConstant = [...product, res.data];
                setProduct(productConstant);
                console.log(product);
                setName("");
                setDescription("");
                setPrice("");   
                
            })
            .catch((err)=>console.log(err));
            navigate('/');
        }

    return(

        <div>
            <h1 className="text-4xl py-2">Edit</h1>
            <Form submitHandler={submitHandler} id={id} product={product}
         setProduct={setProduct}
         price={price}
         setPrice={setPrice}
         description={description}
         setDescription={setDescription}
         name={name}
         setName={setName}
         submitText="Confirm Edit"  
        
         />

        <DeleteButton id={id} product={product} setProduct={setProduct}/>

        </div>
        
    )
}


export default Update;








//includes passing DeleteButton's prop "success" its own unique value... 
//looks like "success()" in DeleteButton component

// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {navigate} from '@reach/router';
// import DeleteButton from '../components/DeleteButton';

// const Update = (props)=>{

//     const {id, name, setName, description, 
//         setDescription, price, setPrice, product, setProduct} = props;

//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/product/' + id)
//         .then((res)=>{
//             console.log(res.data);
//             setName(res.data.name);
//             setPrice(res.data.price);
//             setDescription(res.data.description);
//         })
//     }, [])


//     //needed here in the scenario of changing the field without deleting
//     //in which case, the product is stil listed
//     const deleteProduct = id => {
//         setProduct(product.filter(item => item._id !== id));
//     }

//     const submitHandler = (e)=>{
//         e.preventDefault();
        
//         axios.put('http://localhost:8000/api/product/' + id, { 
//         name, description, price
//         })
//         .then((res)=>{ 
//             console.log(res.data);
//         });
//         navigate('http://localhost:3000/');
//     }

//     return(
//         <form onSubmit={submitHandler} className="block">
//         <h1 className="text-3xl">Edit Product Manager</h1>
//         <DeleteButton id={id} success={()=>{
//             navigate('/')
//             deleteProduct(id)
//             }}/>

//         <div className="
//         bg-gray-50 
//         rounded 
//         flex 
//         justify-between 
//         border-2 
//         px-3
//         py-4 
//         m-auto 
//         my-4 
//         w-80">
//             <label className="
//             text-gray-500 
//             w-20 
//             text-left">
//             Edit Name:
//             </label>
//             <input className="
//             border 
//             rounded 
//             w-3/5" 
//             type="text" 
//             value={name}
//             onChange = {(e)=>setName(e.target.value)}/>
//             <br/>
//         </div>

//         <div className="
//         bg-gray-50 
//         rounded 
//         flex 
//         justify-between 
//         border-2 
//         px-3
//         py-4 
//         m-auto 
//         my-4 
//         w-80">
//             <label className="
//             text-gray-500 
//             w-20 
//             text-left">
//             Edit Price:
//             </label>
//             <input className="
//             border 
//             rounded 
//             w-3/5" 
//             type="text" 
//             value={price}
//             onChange = {(e)=>setPrice(e.target.value)}/>
//             <br/>
//         </div>


//         <div className="
//         bg-gray-50 
//         rounded 
//         flex 
//         justify-between 
//         border-2 
//         px-3
//         py-4 
//         m-auto 
//         my-4 
//         w-80">

//             <label className="
//             text-gray-500 
//             w-20 
//             text-left">
//             Edit Description:
//             </label>
//             <input className="
//             border 
//             rounded 
//             w-3/5" 
//             type="text" 
//             value={description}
//             onChange = {(e)=>setDescription(e.target.value)}/>
//             <br/>
//         </div>
        
//         <input className="p-3 border rounded text-gray-600" type="submit"/>
      
        
        
//     </form>
//     )
// }


// export default Update;



