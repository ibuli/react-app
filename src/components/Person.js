import React from 'react'
import classes from './Person.module.css'

const Person = (props) => {
  return (
    <div className={classes.Person}>
      <h2 onClick={props.click}>This is {props.name}</h2>
      <p>I'm {props.age} years old</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  )
}

export default Person
