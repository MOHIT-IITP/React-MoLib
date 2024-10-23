import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);

  return (
    <>
    <div className="container bg-gray-300 p-10  rounded-2xl  mt-44 flex flex-col justify-center items-center ">
      <h1 className='text-5xl text-gray-700 font-bold pb-4'>Password Generator</h1>
      <div className="slider flex justify-center align-center gap-3 bg-cyan-200 p-4 w-6/12 border-emerald-100 border-3 rounded-xl">
        <input type="range" min={8} max={100}  onChange={(e)=>setLength(e.target.value)} />
        Length: {length}
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className='flex  bg-cyan-200 p-3 rounded-xl'>
          <input type="checkbox" name="" id="" />
          <p className='pl-3 text-gray-700 font-medium'>Number</p>
        </div>
        <div className='flex justify-center items-center bg-cyan-200 p-3 rounded-xl'>
          <input type="checkbox" name="" id="" />
          <p className='pl-3 text-gray-700 font-medium'>Character</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
