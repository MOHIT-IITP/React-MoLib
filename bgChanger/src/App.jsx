import { useState } from "react"
function App() {
  const [changeColor, setColor] =  useState();
  const [textColor, settextColor] = useState("white"); 

  return (
    <>

    <h1 className="text-8xl  text-black" style={{color: textColor}}>I am coming in 5 Min</h1>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: changeColor  }}
    >
    </div>
    <div className="nav h-40 w-full fixed bottom-10 flex justify-center items-center">
    <div className=" bg-black text-white p-5 border-2 rounded-2xl nav flex justify-center items-center gap-10 text-xl">
      <button onClick={() =>{setColor("red"); settextColor("red")} }>Red</button>
      <button onClick={() =>{setColor("cyan"); settextColor("cyan")} }>Cyan</button>
      <button onClick={() =>{setColor("blue"); settextColor("blue")} }>Blue</button>
      <button onClick={() =>{setColor("green"); settextColor("green")} }>Green</button>
      <button onClick={() =>{setColor("yellow"); settextColor("yellow")} }>Yellow</button>
      <button onClick={() =>{setColor("orange"); settextColor("orange")} }>Orange</button>
      <button onClick={() =>{setColor("olive"); settextColor("olive")} }>Olive</button>
    </div>
    </div>

    </>
  )
}

export default App
