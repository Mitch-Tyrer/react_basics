import React, {PureComponent} from 'react';
import Person from './Person/Person';


// stateful form of this component
class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
        this.lastPersonRef = React.createRef();
    }
    
      componentWillMount() {
        console.log("[Persons.js] Inside componentWillMount()");
      }
    
      componentDidMount() {
        console.log("[Persons.js] Inside componentDidMount()");
        this.lastPersonRef.current.focus();
      }

      componentWillReceiveProps(nextProps) {
          console.log("[UPDATE Persons.js] Inside componentWillRecieveProps()", nextProps);
      }

     /*  shouldComponentUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] Inside shouldComponentUpdate", nextProps, nextState);
        return nextProps.persons !== this.props.persons || 
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked;
        // return true;
      } */

      componentWillUpdate(nextProps, nextState){
          console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
      }

      componentDidUpdate() {
        console.log("[UPDATE Persons.js] Inside componentDidUpdate()");
      }

    render () {
        console.log("[Persons.js] Inside render()");

        return this.props.persons.map((person, index) => {
            return <Person 
            click={() => this.props.clicked(index)} 
            name={person.name} 
            position={index}
            age={person.age}
            ref={this.lastPersonRef}
            key={person.id} 
            changed={(event) => this.props.changed(event, person.id)}/>
    } );
    }
}


// stateless form of this component
/* const persons = (props) => props.persons.map((person, index) => {
        return <Person 
        click={() => props.clicked(index)} 
        name={person.name} 
        age={person.age}
        key={person.id} 
        changed={(event) => props.changed(event, person.id)}/>
      }
); */

export default Persons; 