import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Todos from './components/todos'
import AddTodo from './components/addTodo'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddTodo />
     <Todos />
     
    </>
  )
}

export default App
