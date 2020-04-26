import React, { Component } from 'react'
import classes from './Person.module.css'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext

  componentDidMount() {
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated)
  }
  render() {
    console.log('[Person.js] rendering...')
    return (
      <div className={classes.Person}>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}
        <h2 onClick={this.props.click}>This is {this.props.name}</h2>
        <p>I'm {this.props.age} years old</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    )
  }
}

export default Person
