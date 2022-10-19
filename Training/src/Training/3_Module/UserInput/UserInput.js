import React from 'react'

const userInput = (props) => {
  display: flex
  return (
    <input
      type="text"
      onChange={props.changed}
      value={props.currentName}
      style={{ padding: '12px 20px', borderRadius: '15px' }}
    />
  )
}

export default userInput
