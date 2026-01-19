import React, { useState } from 'react'

export default function ObjectFilterEasierEx() {

    const [boxes] = useState ([
        { id: 1, color: "red" },
        { id: 2, color: "blue" },
        { id: 3, color: "red" },
        { id: 4, color: "blue" },
        { id: 5, color: "red" }
    ]);

    // filter state - just a string!
    const[filter, setFilter] = useState('all');

    // filter the boxes
    const filterThem = boxes.filter((itemOb) => {
        if(filter === 'all'){
            return true; // --> we must return boolean also here
        }
        if(filter === 'red'){
            return itemOb.color === 'red' // --> return true (boolean)
        }
        if(filter === 'blue'){
            return itemOb.color === 'blue' // --> --> return true (boolean)
            // it returns only the objects with itemOb.color === 'blue'
            // when we click om button with set('blue) state
            // the display map run on the updated filterThem that working by if() with checking states strings
        }

        // Filter decision: false = SKIP ❌
        // if we check something and it returns flase the filter() is filter it,
        // if we eill return itemOb - it's noe a boolean
        // filter must get boolean check
    })

  return (
    <div>
        <h1>Color Filter</h1>
        <button onClick={() => setFilter('all')}>Show All</button>
        <button onClick={() => setFilter('red')} >Show Red</button>
        <button onClick={() => setFilter('blue')}>Show Blue</button>
        {filterThem.map((item, index) => (
            <div key={item.id}>
                <p>{item.id}</p>
                <p>{item.color}</p>
            </div>
        ))}
    </div>
  )
}
