import React, { useState } from 'react'

const HookCounter = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <h1>{count}</h1>    
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  )
}

export default HookCounter
