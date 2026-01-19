import React, { useState } from 'react'

export default function NewCategoryEx() {

    const [students] = useState([
        { id: 1, name: "Alice", grade: "A" },
        { id: 2, name: "Bob", grade: "B" },
        { id: 3, name: "Charlie", grade: "A" },
        { id: 4, name: "Diana", grade: "C" },
        { id: 5, name: "Eve", grade: "B" },
        { id: 6, name: "Frank", grade: "A" },
        { id: 7, name: "Grace", grade: "C" },
        { id: 8, name: "Henry", grade: "B" }
    ]);

    const studentsGrades = students.reduce((groups, student) => {
        const studentGrade = student.grade;
        if(!groups[studentGrade]){
            return groups[studentGrade] = []
        }

        groups[studentGrade].push(student);
        return groups;
        
    }, {})
    console.log(studentsGrades);
    

  return (
    <div>NewCategoryEx</div>
  )

}
