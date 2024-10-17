import Chai from "./Chai"
import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    // this will print only one time
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }
  
  const subValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Current Count {counter}</h1>
    <button onClick={addValue}>Add Value</button>
    <button onClick={subValue} >Sub Value </button>
    </>
  )
}

export default App
