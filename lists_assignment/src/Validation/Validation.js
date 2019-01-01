import React from 'react';

const validation = (props) => {
    if(props.length <= 5){
        return (
            <div>
                <p>Text is too short!</p>
            </div>
        )
    } else if(props.length >= 5) {
        return (
            <div>
                <p>Text is Long Enough!</p>
            </div>
        )
    }
}




// const validation = (props) => {
//     return (
//         <div>
//              <p>length is {props.length <=5 ? "too short" : "long enough"}</p>
//         </div>
//     )
// }

export default validation;