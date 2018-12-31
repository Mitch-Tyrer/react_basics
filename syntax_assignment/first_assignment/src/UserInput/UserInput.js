import React from 'react';

const userInput = (props) =>{
    return (
        <div>
            <input onChange={props.changed} type="text" value={props.username}></input>
        </div>
    );
}


export default userInput;
