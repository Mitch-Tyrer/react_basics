import React, { Component } from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: "asds1", name: "Mitch", age: 30 },
        { id: "fav1", name: "Cara", age: 22 },
        { id: "kjasd", name: "Paul", age: 33 }
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Inside shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
      console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
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
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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
      <div className={classes.App}>
      <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}
      />
        {persons}
      </div>
    )
  }
}

export default App;
