import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.username}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default userOutput;