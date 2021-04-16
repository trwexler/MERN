import React from 'react';

const Form = (props)=>{

    const {submitHandler, id, name, setName, description, 
        setDescription, price, setPrice} = props;

    return(
        <form onSubmit={submitHandler} className="block">

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


export default Form;