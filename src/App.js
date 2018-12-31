import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons: [
      { name: "Mitch", age: 30 },
      { name: "Cara", age: 22 },
      { name: "Paul", age: 33 }
    ]
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
    this.setState( {
      persons: [
        { name: "Mitch", age: 30 },
        { name: "Cara", age: 22 },
        { name: event.target.value, age: 33 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>THis is really working!</p>
        <button onClick={() => this.switchNameHandler("Mitchell!!!!")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "A Unicorn!")}>My Hobbies: Being Fly AF</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
