import React from 'react'
import useList from './useList'
import useInputValue from '../ex6/useInputValue';

export default function ListExample() {

    const [items, addItem, removeItem, clear] = useList();
    const [input, handleInput, resetInputValue] = useInputValue('');

    // create function to handle adding items:
    const handleAdd = () => {
        if(input.trim() !== ''){
            addItem(input)

            // clear the input field:
            // remember, handleInput expects an event object like:
            // {
                // target: {
                    // 'whatver user typed'
                // }
            // }
            // this calls seValue('') inside useInputValue!
            resetInputValue('')
        }
    }


  return (
    <div>
        <h2>ToDo List</h2>

        <input 
            value={input}
            onChange={handleInput}
            placeholder='Add todo...'
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={clear}>Clear All</button>

        <p>Total Items: {items.length}</p>

        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => removeItem(index)}>X</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
