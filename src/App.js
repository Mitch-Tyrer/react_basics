import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons: [
      { name: "Mitch", age: 30 },
      { name: "Cara", age: 22 },
      { name: "Paul", age: 33 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // DON'T DO THIS: this.state.persons[0].name = "Mitchell";
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Cara", age: 22 },
        { name: "Paul", age: 33 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Mitch", age: 30 },
        { name: "Cara", age: 22 },
        { name: event.target.value, age: 33 }
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "magenta",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>THis is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {
          this.state.showPersons === true ? 
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "A Unicorn!")}>My Hobbies: Being Fly AF</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nameChangedHandler} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
