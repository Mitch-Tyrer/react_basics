import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from "./Char/Char";

class App extends Component {
  state ={
    userInput: ""
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split(''); // creates inputed text into aray
    text.splice(index, 1); // used to remove from the index position, and then only removes 1 char 
    const updatedText = text.join(''); // creates updated text and join to make it a string again
    this.setState({userInput: updatedText}); // will change the state and update the text even in the input
  }

  render() {
    let charList = this.state.userInput.split('').map((char, index) => {
      return <Char character={char} key={index} clicked={() => this.deleteCharHandler(index)}/>;
    });
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
