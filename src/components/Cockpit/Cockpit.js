import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
    let assignClasses = [];
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = classes.red;
    }

    if(props.persons.length <= 2) {
      assignClasses.push(classes.red); // Classes will be ['red']
    }

    if(props.persons.length <= 1){
      assignClasses.push(classes.bold); // classes will be ['red', 'bold']
    }


    return (
        <div className={classes.Cockpit}>
        <h1>Hi, I'm a react app!</h1>
        <p className={assignClasses.join(' ')}>THis is really working!</p>
        <button className={btnClass} 
        onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;