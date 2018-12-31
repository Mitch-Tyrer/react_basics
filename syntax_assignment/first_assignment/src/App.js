import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    users: [
      {username: "Admin", password: "DickDick1"},
      {username: "Cara", password: "DickDick2"},
    ]
  }

  changeUserHandler = (newUser) => {
    this.setState({
      users: [
        {username: newUser.target.value, password: "DickDick1"},
        {username: newUser.target.value, password: "DickDick2"},
      ]
    })
  }
  

  render() {
    const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <UserInput style={style} changed={this.changeUserHandler} />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput>Welcome!</UserOutput>
      </div>
    );
  }
}

export default App;
