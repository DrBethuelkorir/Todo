import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {
  const [Todos,setTodos] = useState([]);
  const [input, setInput] = useState("")

  const handlesubmit = (e) =>{
    e.preventDefault();
    setTodos((Todos) =>
      Todos.concat({
        text:input,
        id:Math.random()
      }),
      setInput("")
     )
  }
  const remove = (id) =>{
    setTodos((Todos) => Todos.filter((t) => t.id !== id))
  }
  return (
    <div className='container'>
      <form onSubmit={handlesubmit} >
        <input type="text"  placeholder='New Todo' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit'>add</button>
      </form>
      <div className="todo-table">
        {
          Todos.map((item) =>
            <p>{item.text} <button onClick={remove}>X</button></p>
        
          )
        }
      </div>
    </div>
  )
}

export default App