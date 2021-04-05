import React, {useState} from "react";

const PersonCard = props=>{
  const [age, birthday] = useState(props.age);
  return (
    <div className="container">
      <h2>
        {props.lastName} {props.firstName}
      </h2>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hair}</p>
      <button onClick={() => birthday(age +1)}>Happy BDAY</button>
    </div>
  );
}
export default PersonCard;






// import React, { Component } from "react";

// class PersonCard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       age: this.props.age,
//     };
//   }

//     ageUp = () => this.setState({age: this.state.age+1});
    
  
//   render() {
//     const { firstName, lastName, hair } = this.props;
//     return (
//       <div className="container">
//         <h2>
//           {lastName}, {firstName}
//         </h2>
//         <p>Age: {this.state.age}</p>
//         <p>Hair Color: {hair}</p>
//         {/* <button onClick={() => this.setState({ age: this.state.age + 1 })}> */}
//         <button onClick={this.ageUp}>
//           Birthday!!
//         </button>
//       </div>
//     );
//   }
// }
// export default PersonCard;