import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

const Form = ()=>{

    const {name, setName} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setName(document.getElementById("theInput").value);
        }

    return(
       
        <form onSubmit={handleSubmit} className="pt-8 mx-auto w-1/2">
            <label htmlFor="name" className="font-semibold">Your name: </label>
            <input id="theInput" className="bg-gray-100 ml-2 py-1 px-3 rounded" type="text" name="name"/>
            <button className="ml-5 border p-2" type="submit">Add</button>
        </form>
    )
}

export default Form;

