import { useState } from "react"
function App() {
  const [changeColor, setColor] =  useState();
  const [textColor, settextColor] = useState("black"); 

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: changeColor  }}
    >
    </div>
    <div className="nav h-40 w-full fixed bottom-10 flex justify-center items-center">
    <div className=" bg-white text-black p-5 border-2 rounded-2xl nav flex justify-center items-center gap-10 text-xl">
      <button style={{color: textColor}} onClick={() =>{setColor("red"); settextColor("red")} }>Red</button>
      <button style={{color: textColor}} onClick={() =>{setColor("cyan"); settextColor("cyan")} }>Cyan</button>
      <button style={{color: textColor}} onClick={() =>{setColor("blue"); settextColor("blue")} }>Blue</button>
      <button style={{color: textColor}} onClick={() =>{setColor("green"); settextColor("green")} }>Green</button>
      <button style={{color: textColor}} onClick={() =>{setColor("yellow"); settextColor("yellow")} }>Yellow</button>
      <button style={{color: textColor}} onClick={() =>{setColor("orange"); settextColor("orange")} }>Orange</button>
      <button style={{color: textColor}} onClick={() =>{setColor("olive"); settextColor("olive")} }>Olive</button>
    </div>
    </div>

    </>
  )
}

export default App
