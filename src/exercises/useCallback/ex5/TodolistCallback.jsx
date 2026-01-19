import React, { useCallback, useState } from 'react'
import ChildTodoCallback from './ChildTodoCallback'

export default function TodolistCallback() {
    // Parent:

    const[filter, setFilter] = useState('all')
    const[todos, setTodos] = useState([
        {id: 1, text: 'lorem ipsum 1', completed: false},
        {id: 2, text: 'lorem ipsum 2', completed: true},
    ])

    console.log('Todo list parent rendered');

    // logic/syntax that i didn't learned yet:
    const toggleTodo = useCallback((id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id 
                ? { ...todo, completed: !todo.completed } 
                : todo
        ))
    }, [])
    
    // logic/syntax that i didn't learned yet:
    // ✅ Filter the todos based on selected filter
    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true
        if (filter === 'active') return !todo.completed
        if (filter === 'completed') return todo.completed
        return true
    })
    
        

  return (
    <div>
        <h1>Todo List</h1>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <p>Current Filter: {filter}</p>
        <p>Todos Length: {todos.length}</p>
        <hr />
        {filteredTodos.map((task) => (
            <ChildTodoCallback
                key={task.id}
                todo = {task} // <- entire object
                onToggle = {toggleTodo} // <- pass toggle function
                // text = {text} <- wrong passing only text
                // you only passing text, not passing complete todo object
            />
        ))}
    </div>
  )
}
