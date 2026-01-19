import React, { useState } from 'react'

export default function SimpleForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailErrors, setEmailErrors] = useState(''); // store error message string
    const [errors, setErrors] = useState(''); // store error message string
  
    const handleSubmit = (e) => {
        e.preventDefault()  
        
        if(name.length < 3){
            setErrors('Name must be at least 3 characters')
        } else{
            setErrors('') // no error
            console.log('Valid', name);
        }

        if(!email.includes('@')){
            setEmailErrors('not have @')
        } else{
            setEmailErrors('')
        }

    }
  
    return (
      <div>
          <h1>Registration Form</h1>
  
          <form onSubmit={handleSubmit}>
              <div>
                  <label>Name: </label>
                  <input 
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
                  <button type='submit'>
                      Register
                  </button>
                  {errors && (<p>{errors}</p>)}
              </div>
  
          </form>
      </div>
    )
}
