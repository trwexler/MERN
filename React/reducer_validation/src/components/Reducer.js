
// import React, { useReducer } from  'react';

// const initialState = {
//     name: '',
//     email: ''
// };
 
// function reducer(state, action) {
//     return {
//         ...state,
//         [action.type]: action.payload
//     };
// }

// function Reducer() {

//     const [state, dispatch] = useReducer(reducer, initialState);

//     function handleChange(e) {
//         const { name, value } = e.target;
//         dispatch({
//             type: name,
//             payload: value
//         });
//     }

//     return (
//         <div>
//             {JSON.stringify(state)}
//             <div>
//                 <label>
//                     <span>Name:</span>{' '}
//                     <input
//                         name="name"
//                         value={state.name}
//                         onChange={handleChange} />
//                 </label>
//             </div>
//             <div>
//                 <label>
//                     <span>Email:</span>{' '}
//                     <input
//                         name="email"
//                         value={state.email}
//                         onChange={handleChange} />
//                 </label>
//             </div>
//         </div>
//     );
// }

// export default Reducer;



import React, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};
    
export default MessageForm;