import React, { Component } from 'react';
import classes from'./App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { id: "asds1", name: "Mitch", age: 30 },
      { id: "fav1", name: "Cara", age: 22 },
      { id: "kjasd", name: "Paul", age: 33 }
    ],
    showPersons: false
  }


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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = "red";    
    }

    let assignClasses = [];
    if(this.state.persons.length <= 2) {
      assignClasses.push(assignClasses.red); // Classes will be ['red']
    }

    if(this.state.persons.length <= 1){
      assignClasses.push(assignClasses.bold); // classes will be ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app!</h1>
        <p className={assignClasses.join(' ')}>THis is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App;
