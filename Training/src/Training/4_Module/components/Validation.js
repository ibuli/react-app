import React from 'react'

const ValidationComponent = (props) => {
  let validationMessage = "Text too long"
  if (props.strLength <= 5) {
    validationMessage = "Text too short"
  } 
  return <p>{validationMessage}</p>
}

export default ValidationComponent