import React from 'react';

const char = (props) => {

    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black",
    };
    return (
        <div>
            <p style={style} onClick={props.click}>{props.letter}</p>
        </div>
    )
}

export default char;