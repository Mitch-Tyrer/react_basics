import React, {Component} from 'react';
import classes from './Person.css';

// stateful form of component
class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
      }
    
      componentWillMount() {
        console.log("[Person.js] Inside componentWillMount()");
      }
    
      componentDidMount() {
        console.log("[Person.js] Inside componentDidMount()");
      }

    render() {
        console.log("[Person.js] Inside render()");   
        
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
            )
    }
}

// stateless form of component
/* const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        )
} */

export default Person;