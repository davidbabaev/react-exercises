import React, { useState } from 'react'

export default function FilterDisplayObjectEx() {

    const [tasks, setTasks] = useState([
        { id: 1, name: "Buy milk", isComplete: true },
        { id: 2, name: "Do homework", isComplete: false },
        { id: 3, name: "Clean room", isComplete: true },
        { id: 4, name: "Call mom", isComplete: false },
        { id: 5, name: "Fix bike", isComplete: true }
    ]);

    // we doing the filter by checking state simple string
    const [filter, setFilter] = useState('all');    

    // create filtered array
    const filteredArray = tasks.filter((objectItem) => {
        if(filter === 'all'){
            return true; // --> don't check anything keep everything
        }
        if(filter === 'complete'){
            return objectItem.isComplete === true;
        }
        if(filter === 'incomplete'){
            return objectItem.isComplete === false;
        }
    })

  return (
    <div>
        <h1>Task Manager</h1>
        <button onClick={() => setFilter('all')} >Show All</button>
        <button onClick={() => setFilter('complete')} >Show Complete</button>
        <button onClick={() => setFilter('incomplete')} >Show Incomplete</button>
    </div>
  )


//   filter === 'complete' -> this is just checking state
// this line does NOT know about isComplete at all!
// is only knows: 'is the filter state currently set complete'?
// the filter state is just a string, is can be any string
// _____________________________________
// the object property"
// task.isComplete = true -> boolean property in object
// this is data in your task object.
// _____________________________________
// they don't connect automatically!
// you connect them with your code.

// const filteredArray2 = tasks.filter((task) => {
//     // STEP 1: check what filter state is
//     if(filter === 'complete'){
//     //   ↑ this checks: is filter state = 'complete'?
        // STEP 2: if yes, check task property 
        // return task.isComplete === true;
        //    ↑ this checks: is this tasks's isComplete = true?
//     }
// })

// when filter is 'all'
// don't look at task properties
// just keep everything
// return true for every task


// filter is a method that creates a NEW array containing only items that pass a test
// original array -> test each item -> new array (only items that passed)
// array.filter(testFunction)
// ____________________________________________________________________________

// ## 🎯 **Visual Model:**
// ```
// Original Array:
// [Item1, Item2, Item3, Item4, Item5]
//    ↓      ↓      ↓      ↓      ↓
//  Test   Test   Test   Test   Test
//    ↓      ↓      ↓      ↓      ↓
//   true  false   true  false   true
//    ↓             ↓             ↓
//   Keep          Keep          Keep
//    ↓             ↓             ↓
//  [Item1,        Item3,       Item5]

// New Array (filtered)
}
