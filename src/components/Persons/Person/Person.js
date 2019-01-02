import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
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
        if(this.props.position === 0){
            this.inputElement.focus();
        } 
      }

    render() {
        console.log("[Person.js] Inside render()");   
        
        return (
            <Aux classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => {this.inputElement = inp}}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}></input>
            </Aux>
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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);