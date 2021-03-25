import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Results from './components/Results';


// Will need two child components:
// One for tabs and one for displaying which tab it is below.

// Need an array that accepts items with properties "label" and "content".

// Multiple, tabs that you can click through are best stored in an array as separate objects. 

function App(){

  const tabsArr = [
    {label:"Tab 1 ", content:"I'm the one"},
    {label:"Tab 2 ", content:"I'm the two"},
    {label:"Tab 3 ", content:"I'm the three"}
  ];
  
  // I'm going to need a state to get these tabs across all of my components
  
  const[allTabs, setAllTabs] = useState(tabsArr);
  
  // now my tabsArr of objects is stored as the default state in allTabs which can be used anywhere.
  
  // I'm going to need to make the index of my allTabs(tabsArr) a separate state to be managed and changed.
  
  const[tabIndex, setTabIndex] = useState(0);
  
  // I set tabIndex to 0 by default so that the first item in allTabs shows by default.
  
  // I need to call out to my child components so that I can access them. I will also give them access to the different states above. 
  
  // Most of the logic being done will happen in Tabs, so it needs all parts of state passed in via props. Results only gets the current state, as it isn't going to be using setters. 


  return(
    <div>
      <Tabs allTabs={allTabs} setAllTabs={setAllTabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <Results allTabs={allTabs} tabIndex={tabIndex}/>
    </div>

  );
}

// Now that we are all set here. We will be setting our logic over in Tabs.

export default App;






























// import './App.css';
// import React, { useState } from 'react';
// import Tabs from './components/Tabs';
// import Results from './components/Results';

// function App() {

//   const tabsArray = [
//     { label: "Tab 1", content: "Tab 1 content is showing here" },
//     { label: "Tab 2", content: "Tab 2 content is showing here" },
//     { label: "Tab 3", content: "Tab 3 content is showing here" },
//     { label: "Tab 4", content: "Tab 4 content is showing here" },
//   ];


  
//   const [ allTabs, setAllTabs ] = useState(tabsArray);

//   //we are setting the above array into the allTabs getter in useState to use elsewhere.

  

//   const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

//   //to get the correct item in the array, we will need to get it's position. current tab index will be which active tab is there.

  
//   return (
//     <div className="App">

//       <Tabs 
//         allTabs={ allTabs } 
//         currentTabIndex={ currentTabIndex }
//         setCurrentTabIndex={ setCurrentTabIndex } 
//       />
//       <Results allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
//     </div>
//   );
// }

// export default App;
