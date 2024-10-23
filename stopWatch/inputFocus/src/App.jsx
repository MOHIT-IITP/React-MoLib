import { useRef, useState } from 'react'
import './App.css'

function App() {
  const FocusRef = useRef(null)

  const focusInput = ()=>{
    FocusRef.current.focus();
  }
  return (
    <>
    <input type="text" ref={FocusRef} />
    <button onClick={focusInput}>Click to Focus</button>
    </>
  )
}

export default App
