import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Todos() {
    const todos =  useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>    
    
    {todos.map((todo) => (
      <div key={todo.id}>{todo.text}</div>
  ))}
  </>
  )
  
}

export default Todos