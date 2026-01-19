import React, { useContext, useRef, useState } from 'react'
import { TodoContext } from './TodoContextEx'

export default function TodoListEx() {
    // display and control

    // Crate ref (like creating a variable)
    const myInput = useRef(null);

    // Attach it to element
    const {todoTask, setTodoTask} = useContext(TodoContext);
    
    const [input, setInput] = useState('')
    const inputUse = (e) => {
        setInput(e.target.value);
    }

    // replaced by Date.now()
    // const [count, setCount] = useState(1)
    // const countIt = () => {
    //     setCount((prev) => prev + 1)
    // }
    
    const addNewTodo = () => {
        if(input.trim() === '') return;
        setTodoTask([...todoTask, {name: input, id: Date.now()}])
    }

    const deleteTodo = (taskId) => {
        const filterTodo = todoTask.filter((task) => {
            return task.id !== taskId
        })
        setTodoTask(filterTodo)
    }

  return (
    <div>
        <input
            ref={myInput}
            type="text"
            onChange={inputUse}
            value={input}
            autoFocus
            />
        <button onClick={() => {
            addNewTodo();
            setInput('')
            myInput.current.focus()
        }}
        >Add</button>
        {todoTask.length === 0 ? (
            <p>No todos yet</p>
        ) : (
        <div>
            <p>Total Tasks: {todoTask.length}</p>
            {todoTask.map((task, index) => (
                <ul key={task.id}>
                    <li>{task.name} - {task.id}</li>
                    <button onClick={() => {
                        deleteTodo(task.id)
                        myInput.current.focus()
                    }}>Remove</button>
                    <p>{index + 1} Task</p>
                </ul>
            ))}
        </div>
        )}
        
    </div>
  )

//   Option To Use - instead of state count.
  // Remove count state completely!
// // In addNewTodo:
// const addNewTodo = () => {
//     setTodoTask([...todoTask, {
//         name: input, 
//         id: Date.now()  // ← Automatic unique ID!
//     }])
// }
}
