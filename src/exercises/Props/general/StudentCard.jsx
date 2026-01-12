import React from 'react'

export default function StudentCard(props) {

    const average = props.grades.reduce((sum, grade) => sum + grade, 0) / props.grades.length;
    const isPass = average > 70 ? props.isPassing === true && 'Pass' : props.isPassing === false && `Under 70 Not Pass` 

  return (
    <div style = {{border:'1px solid black', padding: '10px', margin: '10px', borderRadius: '10px'}}>
        <h2>{props.name}</h2>
        <p>Grades: {props.grades.join(', ')}</p>
        <p>Average: {Math.floor(average)}</p>
        {isPass}
    </div>
  )
}
