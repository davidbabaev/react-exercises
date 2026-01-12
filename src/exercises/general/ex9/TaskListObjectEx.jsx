import React, { useState } from 'react'

export default function TaskListObjectEx() {

    const [taskList, setTaskList] = useState([
        {name: 'Buy milk', isComplete: false },
        {name: 'Clean room', isComplete: true },
        {name: 'Do homework', isComplete: false },
    ])

    // we have to declare toggle function for cahnging from tur to false and back
    const toggleIsComplete = (taskName) => {
        // create new array with updated objects
        const updatedList = taskList.map((task) => {
            // const updatedList = = Store the new array that map creates
            // check: is this task to toggle?
            if(task.name === taskName){
                // yes create new object with isComplete flipped
                return{...task, isComplete: !task.isComplete};
            } else{
                // no - return task changed
                return task;
            }
        })
        // update state with new array
        setTaskList(updatedList);
        console.log(updatedList);
        
    }

  return (
    <div>
        {taskList.map((task, index) => (
            <div key={index}>
                <p>{task.name}</p>
                <button onClick={() => toggleIsComplete(task.name)}>Toggle</button>
                {task.isComplete && <p>✅ Complete</p>}
            </div>
        ))}
    </div>
  )
}
