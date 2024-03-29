import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // setTimeout(() => {
    //   alert('Saved data to cloud')
    // }, 1000)
    toggleBtnRef.current.click()
    return () => {
      console.log('[Cockpit.js] clean up work in useEffect')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect')
    }
  })

  const assignedClasses = []
  let btnClass = ''

  if (props.showPersons) {
    btnClass = classes.reda
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <div className={classes.btn__container}>
        <button onClick={authContext.login}>Log in</button>
        <button type="button">Cancel</button>
      </div>
    </div>
  )
}

export default React.memo(Cockpit)
