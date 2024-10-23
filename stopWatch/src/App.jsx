import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)

  let timeRef = useRef(null);
  // start time here
  const changeTime =  ()=>{
    if(!timeRef.current){
      timeRef.current = setInterval(() => {
        setTime(time => time + 10)
      }, 10);
    }
  }


  // stop time here
  const removeTime = ()=>{
    if(timeRef.current){
      clearInterval(timeRef.current)
      timeRef.current = null
    }
  }
  const resetTime = ()=>{
    removeTime()
    setTime(0)
  }

  return (
    <>
    <div className="container">

      <h1>StopWatch</h1>
      <input type="number" readOnly value={(time/1000).toFixed(3)}/>

{/* // start button */}
      <button onClick={changeTime}> Start</button>

      {/* stop button */}
      <button onClick={removeTime}> Stop</button>

      {/* reset button */}
      <button onClick={resetTime}>Reset</button>
    </div>
    </>
  )
}

export default App
