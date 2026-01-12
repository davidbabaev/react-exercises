import React from 'react'

export default function TodoListMiniProjectEx({todoList, toggleIsComplete, deleteTodo}) {
    // display todos with buttons
  return (
    <div>
        {todoList.map((task, index) => (
            <div key={index}>
                <p>{task.text}</p>
                <p>{task.id}</p>
                {task.isComplete && (<p>It's complete</p>)}
                <button onClick={() => toggleIsComplete(task.id)}>Toggle</button>
                <button onClick={() => deleteTodo(task.id)} >Remove</button>
                <br/>
                <br/>
                <div style={{border: '1px solid black'}} ></div>
            </div>
        ))}
    </div>
  )
}
