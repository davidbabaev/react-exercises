import React from 'react'
import useInputValue from './useInputValue'

export default function FormParExampleEx() {

    // In useInputValue.js
    // return [value, handleChange];
    //            ↑          ↑
    //        Position 0  Position 1

    // orders matters, names not
    // const [name, handleName] =  useInputValue('Jhon')
        //      ↑          ↑
        //  Position 0  Position 1

    // Position 0: the value
    // Position 1: the function

    // you cna't have two variables with the same name!
    // so you use diffrent names

    const [name, handleName] =  useInputValue('Jhon')
    const [email, hanleEmail] =  useInputValue('jhon@gmail.com')
    const [age, handleAge] =  useInputValue('25')

  return (
    <div>
        <h2>User Form</h2>

        <div>
            <p>Name:</p>
            <input value={name} onChange={handleName}/>
            <p>You Typed: {name}</p>
        </div>
        <div>
            <p>Name:</p>
            <input value={email} onChange={hanleEmail}/>
            <p>You Typed: {email}</p>
        </div>
        <div>
            <p>Name:</p>
            <input value={age} onChange={handleAge}/>
            <p>You Typed: {age}</p>
        </div>
    </div>
  )
}
