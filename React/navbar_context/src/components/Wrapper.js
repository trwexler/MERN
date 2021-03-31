
import React, { useState } from 'react';
import UserContext from '../context/UserContext';

const Wrapper = ({children})=>{
    const[name, setName] = useState("Bob Smith");


    return(
        <UserContext.Provider
        value={{
            name,
            setName
            }}
            >

            {children}

        </UserContext.Provider>
    );
};

export default Wrapper;


