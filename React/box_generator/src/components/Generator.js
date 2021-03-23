import React, { useState} from 'react';


const Generator = (props)=>{

    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");



    const addSquare = ()=>{ 
            
        let staging = document.getElementById("staging");
        let noGo = document.getElementById("noGo");
        let colorInput = document.getElementById("colorInput");
        let widthInput = document.getElementById("widthInput");
        let heightInput = document.getElementById("heightInput");
        
        if(color === "blue" || color === "red" || color === "yellow" || color === "black" || color === "purple" || color === "pink" || color === "green" || color === "orange" || color === "magenta" || color === "gray" || color === "gold"){
          
            
            let tag = document.createElement("div");
            staging.appendChild(tag);
            
            setColor(null);
            setWidth(null);
            setHeight(null);
            tag.style.width = width;
            tag.style.height= height;
            tag.style.backgroundColor = color;
            tag.style.margin= "6px";
            colorInput.value = "";
            widthInput.value = "";
            heightInput.value = "";
            noGo.innerText = "";
   
            console.log("has");
        }
        else{  
            noGo.innerText = "";
            noGo.innerText += "Enter in format (example: red 100 100)!";
            colorInput.value = "";
            widthInput.value = "";
            heightInput.value = "";
            console.log("has not");

        }
        
    }




    return(
        <div className="container">

                <div className="userInputSection">
                    <h1>Create Your Squares!</h1>

                   Color <input id="colorInput"  type="text" onChange={ (e)=> setColor(e.target.value) }/>

                    Width <input id="widthInput"  type="text" onChange={ (e)=> setWidth(e.target.value +'px') }/>
                    Height <input id="heightInput" type="text" onChange={ (e)=> setHeight(e.target.value +'px') }/>

                    <button type="submit" onClick={addSquare}>Add</button>

                    <div id="noGo">
                    </div>

                </div>
            
                <div id="staging">

                </div>
            </div>
        )}

        export default Generator; 