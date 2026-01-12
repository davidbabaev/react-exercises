import React, { useState } from 'react'

export default function TodoFormMiniProjectEx({addTodo}) {
    // Input to add new todos
    // local state for input text
    // input field
    // "Add" button
    // function that calls parent's add function

    const [inputData, setInputData] = useState('')
    const handleInput = (e) => {
        setInputData(e.target.value)
    }

    // runs when user clicks the button
    const handleAdd = () => {
        // 1. validation - ignore empty text
        if(inputData.trim() === ''){
            return;
        }

        // 2. tell the parent to add a new todo
        addTodo(inputData)

        // 3. clear the input
        setInputData('');
    }

  return (
    <div>
        <input 
            type="text"
            value={inputData}
            onChange={handleInput}
        />
        <button
            onClick={handleAdd}
        >Add</button>
        {/* <p>{inputData}</p> */}
    </div>
  )

//   onClick = {() => handleInput}
//   handleInput expect an event (e) from the input, but here you call it with no event, so it's incorrect.
// the button shpuld call handleAdd, not handleInput

{/* <p>{handleInput}</p> */}
// is wrong, handleInput is a function so handleInput will just shoe something like function handleInput or nothing useful
// 

}
