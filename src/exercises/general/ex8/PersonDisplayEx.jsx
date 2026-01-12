import React, { useState } from 'react'

export default function PersonDisplayEx() {

    const [person, setPerson] = useState({
        name: 'Alice',
        age: 25,
    })

    const increaseAge = () => {
        setPerson({...person, age: person.age + 1, city: 'NYC'})
        // {...person} -> What it does: Spreads (copies) all properties from current person object
        // What it does: Sets age property to current age + 1
        // setPerson({...person,})
    }

  return (
    <div>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <p>{person.city}</p>
        <button onClick={increaseAge}>Increase Age</button>
    </div>
  )

// setPerson({ ...person, age: person.age + 1 })
    //       ↑  ↑________↑ ↑__↑ ↑______________↑
    //       |  |          |    |
    //       |  |          |    New value
    //       |  |          Property to change
    //       |  Copy all properties
    //       Create new object

    // Objects use {}, arrays use []
    // ...person copies all properties
}
