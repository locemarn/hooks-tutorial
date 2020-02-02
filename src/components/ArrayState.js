import React, { useState } from 'react'

const ArrayState = () => {
  const [array, setArray] = useState([])
  const [state, setState] = useState('')

  const addValueHandler = e => {
    e.preventDefault()

    setArray([...array, array.length > 0 ? `, ${state}` : state])

    setState('')
  }

  return (
    <div>
      <h1>Array: {array}</h1>
      <form onSubmit={addValueHandler}>
        <input type="text" name="state" onChange={e => setState(e.target.value)} value={state} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ArrayState
