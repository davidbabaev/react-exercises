import React from 'react'

export default function StudentReport({name, math, english, science}) {

    // calculate the average
    // add all three graded and devide by 3
    const average = (math + english + science) / 3
    // console.log(Math.floor(average));
    let isPassing;
    isPassing = average > 70 ? isPassing = true : isPassing = false ;
    
    let passOrNo;
    let gradeLetter;
    if(average >= 90 && average <= 100){
        gradeLetter = 'A';
        passOrNo = 'Pass'
    } else if(average >= 80){
        gradeLetter = 'B'
        passOrNo = 'Pass'
    } else if(average >= 70){
        gradeLetter = 'C'
        passOrNo = 'Pass'
    } else if(average >= 60){
        gradeLetter = 'D'
        passOrNo = 'Under 70 Not Pass'
    } else {
        gradeLetter = 'F'
        passOrNo = 'Under 70 Not Pass'
    }

  return (
    <div>
        <p
            style={{
                border: '3px solid black',
                padding: '20px',
                margin: '15px',
                backgroundColor: isPassing ? '#d4edda' : '#f8d7da',
                borderRadius: '10px',
                fontFamily: 'arial'
            }}
        >{name}: {Math.floor(average)}, {gradeLetter}, {passOrNo}</p>
    </div>
  )
}
