import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons: [
      { name: "Mitch", age: 30 },
      { name: "Cara", age: 22 },
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // DON'T DO THIS: this.state.persons[0].name = "Mitchell";
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Cara", age: 22 },
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
      </div>
    );
  }
}

export default App;
