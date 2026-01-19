
// Show ONE todo item: "Learn React"
// Show a checkbox next to it
// When you check it, it shows as completed
// When you uncheck it, it shows as not completed
// Save the checked/unchecked state to localStorage
// When page loads, load the saved state

// ========================================================
// My First Plan:
// ========================================================
// ******!What you plan is too complex!******
// Youre thinking:
// Array of tasks
// object with {task:...,isComplete:...}
// map() to display multiple tasks
// JSON.parse and JSON.stringify

// ******!What you actually need!******
// - show ONE todo item 'learn react' <- judt one not an array.
// - just a checkbox
// just true/false (is it checked or not)
// save that one true/false value

// =======================================================
// =======================================================
// XXXXXXXXmy complex plan:XXXXXXXX
// ____________________________________
// Show ONE todo item: "Learn React":
// - state with []
// - we need an object for each task
// -{task: "ffdghtsdf", isComplete: true/false}
// ____________________________________
// Show a checkbox next to it:
// When you check it, it shows as completed
// When you uncheck it, it shows as not completed
// - we need a true/false state - for toggling complete/incomplete
// ____________________________________
// Save the checked/unchecked state to localStorage
// - localStorage - parse and stringify
// - useEffect - to show the array that we saved on refresh
// - if/else check if array is exist
// ___________________________________
// we need map() to show the array li's (tasks)
// ========================================================
// ========================================================
import React, { useEffect, useState } from 'react'

export default function TodoItemLocaStorage() {

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (e) => {
        const checked = e.target.checked
        //              ↑   ↑      ↑
        //              |   |      └─ Property that holds true/false
        //              |   └──────── The checkbox element
        //              └────────────── The event object
        setIsChecked(checked);

        // we save in the local checked that return true/ false
        // as a string because local can't save in it true/ flase
        localStorage.setItem('check', String(checked))
        // we saving in the localStorage the current value we get
        // from the check box, and save this as a string
    }

    useEffect(() => {
        // wa put in a variabel the current item we have in the local
        const saveChecked = localStorage.getItem('check')
        console.log('saveChecked: ', saveChecked);
        console.log('Type: ', typeof saveChecked);
        
        
        // we get here a string from the local.
        // "true" os "false"

        // localStroage Always returns strings!
        // if you saved true before:
        // saveChecked = "true"

        // if you saved false before:
        // saveChecked = "false"

        // What are we checking in - if(saveChecked)?

        // NOT:
        // saveChecked = true // Not this!
        // saveChecked = false // Not this!

        // if you saved true:
        // saveChecked = 'true' <- string, not boolean!
        // if you saved false
        // saveChecked = 'false' <- string not boolean!

        if(saveChecked){
            // we checking if the string exist
            // saveChecked = 'true' -> string exist
            // if("true") -> NON empty string is truthy -> true

            // or:
            // saveChecked = "false" -> string exist
            // if("false") -> Non-empty string is truthly -> true

            // if localStorage is empty:
            // saveChecked = null -> nothing saved
            // if(null) -> null is falsy -> FALSE
            setIsChecked(saveChecked === 'true')
            //           └────────┬────────┘
            //              This RETURNS true or false!


            // What you write:
            // setIsChecked(saveChecked === 'true')

            // // What JavaScript sees:
            // setIsChecked( [evaluate this first] )
            //              └──────┬──────┘
            //                     ↓
            //             "true" === 'true'
            //                     ↓
            //                   true
            //                     ↓
            // setIsChecked(true)  ← Now calls function with result!
            
            // const comparison = saveChecked === "true"
            // console.log('Comparison: ', comparison); -> true/flase
            

            // we have a string:
            // saveChecked = "true" -> String

            // We compare it:
            // saveChecked === 'true'
            // "true" === "true"
            // true returns boolean
            // now we set the boolean true

            // saveChecked = "false" string
            // saveChecked === "true"
            // "false" === "true"
            // false boolean
            // setIsChecked(false)

        }
    }, [])

  return (
    <div>
        <h1>My Todo</h1>
        <label htmlFor="">
        <input 
            type='checkbox'
            // the checkbox itself returns true/false
            // the browser does this automatically
            // the browser gives it a built-in called .checked
            // before click:
            // checkbox.checked = false;
            // user clicks checkbox:
            // checkbox.checked = true;

            checked = {isChecked}
            onChange={handleChange}
        />
        I agree to terms
        </label>

        <p>Checked: {isChecked ? 'Yes' : 'No'}</p>
    </div>
  )
}
