import React, { useState } from 'react'
import { TodoContext } from './TodoContextEx'
import TodoListEx from './TodoListEx'

export default function TodoAppEx() {

  const [todoTask, setTodoTask] = useState([])

  return (
    <TodoContext.Provider value={{todoTask, setTodoTask}}>
        <TodoListEx/>
    </TodoContext.Provider>
  )
}
