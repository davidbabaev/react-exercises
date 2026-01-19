import React, { useState } from 'react'
import FormInput from './FormInput'


export default function UseFormExample() {

    const[values, setValues] = useState({
        username:'',
        email:'',
        birthday:'',
        password:'',
        confirmPassword:'',
    })

    const inputs = [
        {
            id: 1, 
            name: 'username', 
            type: 'text', 
            placeholder: 'Username', 
            label: 'Username'
        },
        {
            id: 2, 
            name: 'email', 
            type: 'text', 
            placeholder: 'Email', 
            label: 'Email'
        },
        {
            id: 3, 
            name: 'birthday', 
            type: 'text', 
            placeholder: 'Birthday', 
            label: 'Birthday'
        },
        {
            id: 4, 
            name: 'password', 
            type: 'text', 
            placeholder: 'Password', 
            label: 'Password'
        },
        {
            id: 5, 
            name: 'confirmPassword', 
            type: 'text', 
            placeholder: 'Confirm Password', 
            label: 'Confirm Password'
        },
    ]
    
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh on submit form
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }


    console.log(values);
    

  return (
    <div className='app'>
        <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
                <FormInput 
                // this sends four things to formInput
                    key={input.id} 
                    {...input} 
                    value = {values[input.name]}
                    onChange = {onChange}
                />
            ))}
            <button>submit</button>
        </form>
    </div>
  )

// 1. key = {input.id}
// React internal thing
// not usable inside FormInput
// ignore for now

// 2. {...input} this is the confusing part
// input looks like this (example):
// {
//     id: 1, 
//     name: 'username', 
//     type: 'text', 
//     placeholder: 'Username', 
//     label: 'Username'
// }
// when you write:
// {...input}
// it is the same as writing:
// <FormInput
// id= {1}, 
// name = 'username'
// type = 'text' 
// placeholder = 'Username'
// label = 'Username'
// />
// spread(...) takes every key-value pair and passes it as a prop


// First: what problem are we trting to solve?
// - you don't repeat a code
// - you can add validation rules easily
// - you can add/remove inputs without touching JSX
// - one <FormInput/> works for ALL inputs

}
