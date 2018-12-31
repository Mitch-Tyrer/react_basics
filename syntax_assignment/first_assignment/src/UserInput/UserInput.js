import React from 'react';

const userInput = (props) =>{

    const style = {
        font: "inherit",
        border: "2px solid red",
        padding: "8px",
        cursor: "pointer"
      }


    return (
        <div>
            <input style={style} onChange={props.changed} type="text" value={props.currentName}></input>
        </div>
    );
}


export default userInput;
