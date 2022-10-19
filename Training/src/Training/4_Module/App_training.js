import React, { Component } from 'react'
import './App.css'
import Validation from './components/Validation'
import Char from './components/Char'

class App extends Component {
  state = {
    userInput: '',
  }

  inputChangeHandler = (e) => {
    this.setState({ userInput: e.target.value })
  }

  removeCharHandler = (charIndex) => {
    const text = this.state.userInput.split('')
    text.splice(charIndex, 1)
    const updatedText = text.join('')
    this.setState({ userInput: updatedText })
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return (
        <Char
          letter={char}
          key={index}
          clicked={() => this.removeCharHandler(index)}
        />
      )
    })

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
          style={{ padding: '12px 20px', borderRadius: '15px' }}
        />
        <p>{this.state.userInput}</p>

        <Validation strLength={this.state.userInput.length} />

        {charList}
      </div>
    )
  }
}

export default App
