import React, { Component } from 'react'
import classes from './App.module.css'
import Person from './components/Person'
class App extends Component {
  state = {
    persons: [
      {
        id: '1',
        name: 'Burhan',
        age: '24',
      },
      {
        id: '2',
        name: 'Hussain',
        age: '21',
      },
      {
        id: '3',
        name: 'Mohammed',
        age: '21',
      },
    ],
    otherState: 'Some data',
    showPersons: false,
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex],
    }

    person.name = e.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    let persons = null

    let btnClass = ''

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                change={(e) => this.nameChangeHandler(e, person.id)}
              />
            )
          })}
        </div>
      )

      btnClass = classes.Red
      
    }

    const assignedClasses = []
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    } 
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hi this is my react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App
