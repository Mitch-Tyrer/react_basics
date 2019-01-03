import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';


const cockpit = (props) => {
    let assignClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignClasses.push(classes.red); // Classes will be ['red']
    }

    if (props.persons.length <= 1) {
        assignClasses.push(classes.bold); // classes will be ['red', 'bold']
    }


    return (
        <Aux>
            <h1>Hi, I'm a react app!</h1>
            <p className={assignClasses.join(' ')}>THis is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Login</button>
        </Aux>
    );
};

export default cockpit;