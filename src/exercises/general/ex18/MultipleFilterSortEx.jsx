import React from 'react'

export default function MultipleFilterSortEx() {

    // Task: Filter students grade >= 70 and age < 20, then sort by grade (highest first)

    const students = [
      { name: "Bob", age: 19, grade: 92 },
      { name: "Alice", age: 35, grade: 85 },
        { name: "Charlie", age: 25, grade: 78 },
        { name: "David", age: 18, grade: 65 },
        { name: "David", age: 32, grade: 42 },
        { name: "David", age: 40, grade: 35 },
        { name: "Eve", age: 19, grade: 88 }
    ];

    const filterGrade = students.filter(student => 
      student.grade >= 70 && student.age > 20 
    )
    // console.log(filterGrade);

    const finish = [...filterGrade].sort((a,b) => b.grade - a.grade)
    console.log(finish);
    
    const average = finish.reduce((acc,curr) => {
      return acc + curr.grade / finish.length
    }, 0);

    console.log('Average: ', Math.floor(average));
    

    // accumulator = keeps the results as we go
    // currentValue = curren item in loop 
    // initialValue = starting point (often 0)

  return (
    <div>
      {finish.map((student, index) => (
        <div key={index}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Grade: {student.grade}</p>
        </div>
      ))}
    </div>
  )
}
