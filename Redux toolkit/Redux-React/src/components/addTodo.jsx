import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input 
        className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-5000 focus:ring-2 focus : ring-indigo-900 text-bse outline-none text-gray-100 py-1 px-3 transition-co;ors duration-200 ease-in-out '
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a todo....'
        />
        <button
        type='Submit'
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none '
        >Add Todo</button>


    </form>
  )
}

export default AddTodo