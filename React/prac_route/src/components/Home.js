import React from "react";

const Home = (props) => {
    console.log(props);
    if(!props.word || props.word == "home"){
        return(
            <div>
                <h1>Welcome!</h1>
            </div>
        )
    }
    else{
        if(isNaN(props.word)){
            return(
                <div>
                {
                    props.color ?
                    <h1 style={{color: props.color, backgroundColor:props.bgColor}}>{props.word}</h1>
                    : <h1>{props.word}</h1>
                }
            </div>
            )
        }
        else{
            return(
                <div>
                    <h1>The number is: {props.word}</h1>
                </div>
            )
        }
    }
};
export default Home;