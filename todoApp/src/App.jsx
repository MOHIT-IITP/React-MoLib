import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo]  = useState('');
  const [todoList , setTodoList] = useState([]);

  // add todo list 
  const addTodo = ()=>{
    if(todo.trim() !== ''){
      setTodoList([...todoList, todo]); // In js we add two object in one like this 
      setTodo('');
    }
  }

  // remove todo list 
  const removeTodo = (index)=>{
    const newTodoList = todoList.filter((_,i) => i !== index);
    setTodoList(newTodoList);
  }

  return (
    <>
    <div className="main flex justify-center items-center">

    <div className="container bg-gray-100  w-96 h-96 p-10 rounded-xl ">
      <h1 className='text-gray-700 font-bold text-4xl pb-4'>To-Do List</h1>

      {/* Add todo  */}
      <div className="inputTodo">
        <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} className='rounded-xl p-2 mr-4' />
        <button onClick={addTodo} className='px-4 p-2  bg-gray-400 rounded-xl hover:bg-gray-200'>Add</button>
      </div>

      {/* Todo List  */}
      <ul className='todoList'>
        {todoList.map((item, index) =>(
          <li key={index} className='mt-3 p-2 bg-white rounded-xl mb-2 shadow-sm'>
            {item}
            <button className='p-2 bg-red-500 text-white hover:bg-white hover:text-red-500 rounded-xl ml-3 ' onClick={()=>removeTodo(index)}>Remove</button>


            <button className='p-2 bg-blue-500 text-white rounded-xl ml-2 ' onClick={()=>editTodo(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  )
}

export default App
