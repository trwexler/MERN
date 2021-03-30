import React, {useState} from 'react';
import './App.css';

import Tasks from './components/Tasks';

function App() {

  // What does a todo app need?

  // Physical:
  // -An input to type in new tasks
  //         -Each task will have a text and completed property (initially set to "false")
  // -A button to submit those tasks
  // -Those tasks all displayed
  // -A button to delete tasks (can be generated with individual item in display)
  //       -Filter can be used to sift through. Items that have had their prop changed to "true" go away



  // -A place to store all tasks
  // -A setter that is able to take in new tasks


  // -Logic to pinpoint specific tasks
  // -A way to take display the results of above logic.



  //I can create an empty array for task items that will get functionality to be added to via a state setter.

  //It seems like defining the objects/tasks in the array would need to be done in the child logic, 
  // but we need that now in order to send it to all available children?
  //Maybe we can put a push method with the obj/task in the logic child. It should be able to be accessed due to being in state.



  // const tasksArr = [];  
  //I don't think I need if I'm not defining what's inside of it right now?

  //next I need to create a state that will hold this array via getter and add more via setter.

  const [allTasks, setAllTasks] = useState([]);


  return (

    <div className="App">
      <h1>Add your Task!</h1>
      <Tasks allTasks={allTasks} setAllTasks={setAllTasks}/>
      
    </div>
  );
}

export default App;
