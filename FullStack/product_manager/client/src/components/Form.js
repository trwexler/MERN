import React from 'react';

const Form = (props)=>{

    const {submitHandler, id, name, setName, description, 
        setDescription, price, setPrice} = props;

    return(
        <form onSubmit={submitHandler} className="
        block border w-96 m-auto pb-5 shadow-md">

        <div className="
        rounded 
        flex 
        justify-between  
        px-3
        py-4 
        m-auto 
        my-4 
        w-96">
            <label className="
            text-lg
            mt-2
            text-gray-500 
            w-20 
            text-left">
            Name
            </label>
            <input className="
            ml-3
            transform
            outline-none
            duration-300
            focus:ring-4
            focus:ring-blue-600
            focus:ring-opacity-20
            border-transparent
            text-center
            shadow
            py-2
            border 
            rounded-3xl 
            w-3/5" 
            type="text" 
            value={name}
            onChange = {(e)=>setName(e.target.value)}/>
            <br/>
        </div>

        <div className="
         
        rounded 
        flex 
        justify-between 
        px-3
        py-4 
        m-auto 
        my-4 
        w-96">
            <label className="
            text-lg
            mt-2
            text-gray-500 
            w-20 
            text-left">
            Price
            </label>
            <input className="
            ml-3
            transform
            outline-none
            duration-300
            focus:ring-4
            focus:ring-blue-600
            focus:ring-opacity-20
            border-transparent
            text-center
            shadow
            py-2
            border 
            rounded-3xl 
            w-3/5" 
            type="text" 
            value={price}
            onChange = {(e)=>setPrice(e.target.value)}/>
            <br/>
        </div>


        <div className="
         
        rounded 
        flex 
        justify-between 
         
        px-3
        py-4 
        m-auto 
        my-4 
        w-96">
            <label className="
            text-lg
            mt-2
            text-gray-500 
            w-20 
            text-left">
            Description
            </label>
            <input className="
            ml-3
            transform
            outline-none
            duration-300
            focus:ring-4
            focus:ring-blue-600
            focus:ring-opacity-20
            border-transparent
            text-center
            shadow
            py-2
            border 
            rounded-3xl 
            w-3/5" 
            type="text" 
            value={description}
            onChange = {(e)=>setDescription(e.target.value)}/>
            <br/>
        </div>
        
        <input className="transform hover:animate-pulse duration-300 p-3 cursor-pointer border rounded font-bold text-gray-400 bg-gray-100 shadow " value={props.submitText} type="submit"/>
        
        
    </form>
    )
}


export default Form;