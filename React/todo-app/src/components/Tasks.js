import React, {useState, useEffect} from 'react';

const Tasks = (props) =>{

    const {allTasks, setAllTasks} = props;
    const [taskText, setTaskText] = useState("");
    const [completed, setCompleted] = useState(false);


    const handleSubmit = (e)=>{
        e.preventDefault();
        const fullTaskList = [...allTasks, {text: taskText, completed: completed}];
        setAllTasks(fullTaskList); 
        setTaskText("");
        setIndex(0);
    }

    const styleTab = (completed)=>{         
        if(completed === true){
            return "completed";
        }
        else{
            return "notCompleted";
        }
    }

    const handleRemoveItem = text => {
        setAllTasks(allTasks.filter(task => task.text !== text))
    }


    const handleCompleted = task =>{
        task.completed = !task.completed;
        let updatedTasks = [...allTasks]
        setAllTasks(updatedTasks);
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="taskText"
                value={taskText}
                onChange={(e)=>setTaskText(e.target.value)}
                />
                <button>Add/Update!</button>
            </form>

{       
    allTasks.map((task,i)=>(
            <div key={i}>
                <div className={styleTab(task.completed)}>{task.text}</div>
                <button onClick={()=>{handleCompleted(task)

                    }
                }
                    >Completed</button>
                <button onClick={()=>handleRemoveItem(task.text)}>Remove</button>

            </div>
        ))
}  
        </div>
    )
}

export default Tasks;




// import React, {useState, useEffect} from 'react';

// const Tasks = (props) =>{

//     const {allTasks, setAllTasks} = props;
//     const [taskText, setTaskText] = useState("");
//     const [index, setIndex] = useState(0);
//     const [done, setDone] = useState(false);


//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         const fullTaskList = [...allTasks, {text: taskText, completed: done, id:index}];
//         setAllTasks(fullTaskList); 
//         setTaskText("");
//         setIndex(index +1);
//     }

//     const styleTab = (completed)=>{         
//         if(completed === true){
//             return "completed";
//         }
//         else{
//             return "notCompleted";
//         }
//     }

//     const handleRemoveItem = text => {
//         setAllTasks(allTasks.filter(task => task.text !== text))
//     }

//     // useEffect(()=>{
//     //     setTaskText(  );
//     // }); continuously run it? How do I access directly what i need?


//     const handleCompleted = (e, completed) =>{
//         setDone(true);
//     }

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text"
//                 name="taskText"
//                 value={taskText}
//                 onChange={(e)=>setTaskText(e.target.value)}
//                 />
//                 <button>Add/Update!</button>
//             </form>

// {       
//     allTasks.map((task,i)=>(
//             <div key={i}>
//                 <div className={styleTab(task.completed)}>{task.text}</div>
//                 <button onClick={()=>handleCompleted(task.completed)}>Completed</button>
//                 <button onClick={()=>handleRemoveItem(task.text)}>Remove</button>
//                 {/* tried similar method, but your is weighing this secific text against all others, 
//                 when done with boolean, all are deleted.. how do i hone in on one specific? Cann't figure anything out not in-line*/}

//                 {/* your example from class changes an item BEFORE it comes into play. I'm not sure how to do it after... Map in app.js? */}
//             </div>
//         ))
// }  

//         </div>
//     )
// }

// //i couldnt get any sort of index to work to be able to call individual items in the array, so I was unable to include a check box that dynamically altered the completed property.

// export default Tasks;




