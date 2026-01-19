import React, { useEffect, useState } from 'react'

// 1. Add itmes to shopping list
// 2. Display all items in a list
// 3. Remove items by clicking a button
// 4. Save to loaclStorage automatically
// 5. Load from localStorage whaen page opens

export default function PracticeLoaclSec() {

    // const [saved, setSaved] = useState([]); -> don't need this
    // const [input, setinput] = useState(''); -> don't need this

    // We only need 2 states!
    // we save in it out array of values, each value come from the value state each time.
    const [shoppingList, setShoppingList] = useState([]);
    // value state take the input value
    const [value, setValue] = useState('');

    // Load from localStorage when component mounts
    // useEffect will load on first render the saves array if it's exist
    // it get the 'tasks' from the loacl save in it a variable,
    // then with if(saved) we check if it exist,
    // if it is, we 
    useEffect(() => {
        // gets data but doesn't use it!
        // localStorage.getItem('tasks') || 'Null'

        const saved = localStorage.getItem('tasks');
        if(saved) {
            const loaded = JSON.parse(saved); // convert to array
            //take the string from localStorage
            // convert it back to an actual array
            // saved it in loaded variable
            
            // saved is a string:
            // saved = "['milk', 'bread']"
            
            // JSON.parse converts to array:
            // const loaded = JSON.parse(saved);
            // loaded = ['milk', 'bread'] <- now it's an array

            // why we need this?
            // loaclStorage onlt stores strings:
            // localStorage.getItem('tasks') -> "['milk', 'bread']"
            // we need an array to work with:
            // ['milk','bread'] -> array we can use with .map() ,filter(), etc.

            setShoppingList(loaded); // put in state
            // what it does:
            // takes the array we just created
            // puts it in react state
            // now your component can display it!
        }
    }, [])

    const handleInput = (e) => {
        setValue(e.target.value);
    }
    
    const handleBtn = () => {
        // Create new array with new item
        const newList = [...shoppingList, value] // -> create new array

        // update state
        setShoppingList(newList);

        // Save to localStorage (with JSON.stringify!) 
        localStorage.setItem('tasks', JSON.stringify(newList));

        // clear input:
        setValue('')

        // wrong:
        // setSaved(loacalSave)
    }
    

  return (
    <div>
        <input 
            value={value}
            onChange={handleInput}
        />
        <button onClick={handleBtn}>Click</button>
        {/* <p>{input}</p> */}
        {shoppingList.map((value,index) => (
        <ul key={index}>
            <li>{value}</li>
        </ul>
        ))}
    </div>
  )
}
