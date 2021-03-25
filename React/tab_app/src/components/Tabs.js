import React from 'react';


const Tabs = (props) => {
 
    //After finishing creating our array of objects and defining state over in our parent component, it is time to pass over state using props!

    const{allTabs, tabIndex, setTabIndex} = props;

    
//To show users which tab is active, the below function will change class names based on which tab is active.
    const styleTab = (i)=>{ 
        if(tabIndex === i){
            return "activeTab";
        }
        else {
            console.log("not act");
            return "notActiveTab";
        }
    };

// We can use the map method to iterate through allTabs, displaying each individual item as a div. 
    return (
      <div className="tabContainer">
          {
              allTabs.map((item, i) =>(
                  <div className = {`animated ${styleTab(i)}`}
                  key={i}
                  onClick={ (e) => setTabIndex(i) }>
                      {item.label}
                  </div>
              ))   
          } 
      </div>
    );
  }
  export default Tabs;
  
  



























// import React from 'react';

// const Tabs = (props) => {
//   const { allTabs, currentTabIndex, setCurrentTabIndex } = props;
//   //importing over allTabs (which is the entire array), currentTagIndex so we know which we are currently on (0 at start/by default) AND the setCurrentIndex which gives us the ability to change the current index/tag.


//   const tabStyle = (i) => {
//     if (i === currentTabIndex) {
//       return "selectedTab";
//     } else {
//       return "nonSelectedTab";
//     }
//   }

// //   const setSelectedTab = (i) => {
// //     setCurrentTabIndex(i);
// //   }

// //this is done in a way that is not inline

//   return (
//     <div /*style={{ margin: "auto", width: "85%", textAlign: "left"}}*/ >

//       {/* we do not actually need to use content, but it MUST be there so we can get the index */}

//       {    
//         allTabs.map((item, i) => (
//           <div className={`tab ${ tabStyle(i) }`}  
//           key={i} 
//           onClick={() => setCurrentTabIndex(i) }>

//           { item.label }

//           </div>

//         )) 
//       }

//       {/* 
//       in jsx we are iterating through our allTabs state 
//       (which includes our array of four objects) with .map(),
//       and through each iteration, a div is added (four total).
//       Each div carrys an onClick method.
//       This sets the currentTabIndex == array item's index (i).
       


//     </div>
//   )
// }



// export default Tabs;
