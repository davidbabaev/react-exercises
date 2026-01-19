import React from 'react'
import StudentReport from './StudentReport'

export default function ParentStudent() {
  return (
    <div>
        <StudentReport
            name = 'Alice'
            math = {85}
            english = {90}
            science = {88}
        />
        <StudentReport
            name = 'Bob'
            math = {65}
            english = {90}
            science = {68}
        />
        <StudentReport
            name = 'Natali'
            math = {75}
            english = {93}
            science = {85}
        />
        <StudentReport
            name = 'Yonatan'
            math = {55}
            english = {64}
            science = {75}
        />
    </div>
  )
}
