import { Today } from '@mui/icons-material'
import React, { useState } from 'react'

export default function ToDoListRemoveEx() {

    const [toDos, setToDos]  = useState(['Buy groceries', 'Clean room', 'Do homework', 'Call mom'])
    const removeIt = (itemToRemove) => {
        const updatedArray = toDos.filter((task) => task !== itemToRemove)
        setToDos(updatedArray)
    }

  return (
    <div>
        {toDos.map((task, index) => (
            <div key={index}>
                <p>{task}</p>
                <button onClick={() => removeIt(task)} >Remove It</button>
            </div>
        ))}
    </div>
  )
}
