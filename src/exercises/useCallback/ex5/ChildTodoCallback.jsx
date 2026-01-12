import React, { useState } from 'react'

// Child:

function ChildTodoCallback({todo, onToggle}) {

    // parent has the data (completed: true/ false)
    // but child created its own checkbox state
    // your todos have completed property
    // but you're creating new state in the child
    // const[checked, setCheked] = useState(false); // <- wrong make new state
    // when we refresh the page - todo id 2 have to be checked
    // but it's not because child starts with useState(false)


    // only update child state
    // problem: parent doesn't know checkbox was clicked
    // parent's todos array never updates
    // data is out of sync
    // const handleCheckBox = (e) => {
    //     setCheked(e.target.checked)
    // }

  return (
    <div>
        <label>
            <input 
                type='checkbox'
                checked = {todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            {todo.text}
        </label>
    </div>
  )
}

export default React.memo(ChildTodoCallback)