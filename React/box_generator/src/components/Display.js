import React from 'react';

const Display = (props) => {

    const {square} = props;

    return(
        <div>
            <h1>Ze Boxes!</h1>
                {
                square.map((color, i)=> 
                    <div key={i} style={{
                        display:"inline-flex",
                        width:"100px",
                        height:"100px",
                        margin:"7px",
                        backgroundColor: color
                    }}>
                    </div>
                )
                }
        </div>
    );

}
export default Display;
