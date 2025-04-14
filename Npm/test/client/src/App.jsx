// import React from 'react'
import { add, multiply } from 'demo'
import Div from 'demo/Div'

function App() {
  return (
    <div>
      <h1>Add: {add(5, 8)}</h1>
      <h1>Multiply: {multiply(1, 2)}</h1>
      <Div/>
    </div>
  )
}

export default App