import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary/Auxiliary';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: "asds1", name: "Mitch", age: 30 },
        { id: "fav1", name: "Cara", age: 22 },
        { id: "kjasd", name: "Paul", age: 33 }
      ],
      showPersons: false,
      toggledClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  /*  shouldComponentUpdate(nextProps, nextState) {
     console.log("[UPDATE App.js] Inside shouldComponentUpdate", nextProps, nextState);
     return nextState.persons !== this.state.persons ||
            nextState.showPersons !== this.state.showPersons;
   } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[UPDATE App.js] Inside getDrivedStateFromProps', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[UPDATED App.js] Inside getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate()");
  }


  /*   state = {
      persons: [
        { id: "asds1", name: "Mitch", age: 30 },
        { id: "fav1", name: "Cara", age: 22 },
        { id: "kjasd", name: "Paul", age: 33 }
      ],
      showPersons: false
    } */


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    // and alternative to using the spread (...) method

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //does the same as splice() but is more popular
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  // calling on a Previous State if there is a danger of altering the current state at the same point in time
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => { 
      return {
        showPersons: !doesShow, 
        toggledClicked: prevState.toggledClicked + 1 
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log("[App.js] Inside render()");

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    }


    return (
      <Aux>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
        
      </Aux>
    )
  }
}

export default WithClass(App, classes.App);
