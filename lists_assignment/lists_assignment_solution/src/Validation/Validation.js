import React from 'react'

const validation = (props) => {
    // best use solution using if statements
    let validationMessage ="Text Long Enough!";
    if(props.inputLength <= 5) {
        validationMessage = "Text Too Short!"
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>


        // Ternary Expression for solution
        // in order to print different things based on length
        /* <div>
            {
                props.inputLength > 5 ?
            <p>Text Long Enough!</p> :
            <p>Text too short!</p>
            }
        </div> */
    )
};

export default validation;