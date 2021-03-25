import React from 'react';

const Results = (props) => {

  const{allTabs, tabIndex} = props;
 

  return (
    <div className="displayBox">
      {allTabs[tabIndex].content};
    </div>
  )
}

export default Results;






















// import React from 'react';

// const Results = (props) => {
//   const { allTabs, currentTabIndex } = props;

//   return (
//     <div className="results">
//       { allTabs[currentTabIndex].content }
//     </div>
//   )
// }

// export default Results;
